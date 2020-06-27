import handlebars from 'handlebars';

import IParceMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParceMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
