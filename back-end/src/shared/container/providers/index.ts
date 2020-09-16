import { container } from 'tsyringe';

import IStorageProvider from './StoragedProvider/models/IStorageProvider';
import DiskStorageProvider from './StoragedProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    DiskStorageProvider,
);
