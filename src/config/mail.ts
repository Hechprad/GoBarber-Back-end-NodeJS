interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // inserir email configurado no "email adresses" da AWS
      email: 'hecherat@exemplo.com',
      name: 'Jorge Hecherat',
    },
  },
} as IMailConfig;
