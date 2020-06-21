import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
// import DiskStorageProvider from '@shared/container/providers/MailProvider/implementations/;

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

// container.registerSingleton<IMailProvider>(
//   'MailPRovider',
//   ??,
// );
