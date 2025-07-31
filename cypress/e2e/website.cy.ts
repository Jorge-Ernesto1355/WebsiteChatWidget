describe("Website", () => {
  it("should load the navbar", () => {
    cy.visit("/");
    cy.get("[title='Chat widget']").should("contain", "Chat widget");
    cy.get("nav a").should("have.length", 1);
    cy.get("nav a").contains("Features").click();
    cy.url().should("include", "features");
  });

  it("should load the hero section", () => {
    cy.visit("/");
    cy.get("[title='build ai chatbots']").should(
      "contain",
      "Build AI Chatbots"
    );
    cy.get("p").should("contain", "Create personalized AI chatbots");
  });

  it("should load the code section", () => {
    cy.visit("/");
    cy.get("[aria-label='code-icons']")
      .should("exist")
      .children()
      .should("have.length", 3);
    cy.get("[aria-label='red-code']").should("exist");
    cy.get("[aria-label='green-code']").should("exist");
    cy.get("[aria-label='blue-code']").should("exist");

    const tsxCode = `
<ChatWidget
      title="AI assistant"
      direction="left" 
      huggingface=""
      // replicate="YOUR_REPLICATE_TOKEN" (use one or the other)
      config={{
          temperature: 0.7
          max_tokens: 400
          top_p: 1
          model: "HuggingFaceTB/SmolLM3-3B"
          frequency_penalty: "0
          timeout: 30000
          }}
      data={{
        useCase: "customer-support",
        questions: [{
                    "question": "hello",
                    "answer": "hi",
                    "category": "general",
                    "confidence": 0.5
                  },
                  {
                    "question": "how are you?",
                    "answer": "good",
                    "category": "general",
                    "confidence": 0.8
                 }]
  }}
      chatStyles={{}}
      formStyles={{
        inputStyles: {},
        buttonStyles: {},
        formStyles: {},
      }}
/>
`;

    cy.get("[aria-label='name component']").should("contain", "ChatWidget");
    cy.get("[aria-label='copy']").should("exist").should("contain", "Copy");
    cy.get("[aria-label='code']").should("exist").should("contain", tsxCode);
  });

  it("should load the form section", () => {
    cy.visit("/");
    cy.get("[title='bot parameters']").should("contain", "Bot Parameters");
    cy.get("[aria-label='title-input']")
      .should("exist")
      .should("have.value", "AI assistant")
      .should("have.attr", "placeholder", "Title");

    cy.get("[data-cy='direction-select']").should("exist").contains("Left");
    cy.get("[data-cy='provider-select']")
      .should("exist")
      .contains("Huggingface");
    cy.get("[data-cy='access-token-input']")
      .should("exist")
      .should(
        "have.attr",
        "placeholder",
        "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"
      );

    cy.get("[data-cy='model-input']")
      .should("exist")
      .should("have.attr", "placeholder", "e.g. HuggingFaceTB/SmolLM3-3B")
      .should("have.value", "HuggingFaceTB/SmolLM3-3B");

    cy.get("[aria-label='slider-value-temperature']").should("contain", "0.7");
    cy.get("[aria-label='slider-value-max_tokens']").should("contain", "400");
    cy.get("[aria-label='slider-value-top_p']").should("contain", "1");
    cy.get("[aria-label='slider-value-frequency_penalty']").should(
      "contain",
      "0"
    );
    cy.get("[aria-label='slider-value-timeout']").should("contain", "30000");

    const expected = [
      {
        question: "hello",
        answer: "hi",
        category: "general",
        confidence: 0.5,
      },
      {
        question: "how are you?",
        answer: "good",
        category: "general",
        confidence: 0.8,
      },
    ];

    cy.get("[data-cy='use-case-select']").contains("Customer Support");
    cy.get("[data-cy='questions-code']")
      .invoke("val")
      .then((val) => {
        const parsed = JSON.parse(val as string);
        expect(parsed).to.deep.equal(expected);
      });
  });

  it("should be able to copy the code from code section", () => {
    const expectedCode = `<ChatWidget
      title="AI assistant"
      direction="left" 
      huggingface=""
      // replicate="YOUR_REPLICATE_TOKEN" (use one or the other)
      config={{
          temperature: 0.7
          max_tokens: 400
          top_p: 1
          model: "HuggingFaceTB/SmolLM3-3B"
          frequency_penalty: 0
          timeout: 30000
          }}
      data={{
        useCase: "customer-support",
        questions: [{
                    "question": "hello",
                    "answer": "hi",
                    "category": "general",
                    "confidence": 0.5
                  },
                  {
                    "question": "how are you?",
                    "answer": "good",
                    "category": "general",
                    "confidence": 0.8
                 }]
  }}
      chatStyles={{}}
      formStyles={{
        inputStyles: {},
        buttonStyles: {},
        formStyles: {},
      }}
/>`;
    cy.visit("/");

    cy.window().then((win) => {
      const stub = cy
        .stub(win.navigator.clipboard, "writeText")
        .as("writeText");

      cy.get('[aria-label="copy-button"]').click();

      cy.then(() => {
        // Acceder al stub directamente aquí
        expect(stub).to.have.been.called;

        const calledWith = stub.getCall(0).args[0].trim().replace(/\s+/g, "");
        const expectedClean = expectedCode.trim().replace(/\s+/g, "");

        expect(calledWith).to.equal(expectedClean);
      });
    });
  });
});
