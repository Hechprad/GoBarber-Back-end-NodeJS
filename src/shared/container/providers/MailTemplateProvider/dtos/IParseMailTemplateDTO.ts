interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParceMailTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
