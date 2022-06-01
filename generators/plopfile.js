module.exports = function (plop) {
  plop.setGenerator("components", {
    description: "application components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "components name?",
      },
    ],

    actions: [
      {
        type: "add",
        path: "../src/components/{{lowerCase name}}/{{lowerCase name}}.component.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{lowerCase name}}/{{lowerCase name}}-view.component.tsx",
        templateFile: "templates/component-view.component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{lowerCase name}}/{{lowerCase name}}.styled.tsx",
        templateFile: "templates/component.styled.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{lowerCase name}}/{{lowerCase name}}.spec.tsx",
        templateFile: "templates/component.spec.tsx.hbs",
      },
    ],
  });
};
