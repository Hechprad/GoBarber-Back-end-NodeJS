import IParceMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParceMailTemplateDTO): Promise<string>;
}
