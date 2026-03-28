import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceModule } from 'src/engine/metadata-modules/data-source/data-source.module';
import { TwentyStandardApplicationModule } from 'src/engine/workspace-manager/twenty-standard-application/twenty-standard-application.module';

import { SyncStandardObjectsCommand } from './sync-standard-objects.command';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkspaceEntity]),
    DataSourceModule,
    TwentyStandardApplicationModule,
  ],
  providers: [SyncStandardObjectsCommand],
  exports: [SyncStandardObjectsCommand],
})
export class SyncStandardObjectsCommandModule {}
