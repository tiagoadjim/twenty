import { InjectRepository } from '@nestjs/typeorm';

import { Command } from 'nest-commander';
import { Repository } from 'typeorm';

import {
  ActiveOrSuspendedWorkspacesMigrationCommandRunner,
  type ActiveOrSuspendedWorkspacesMigrationCommandOptions,
} from 'src/database/commands/command-runners/active-or-suspended-workspaces-migration.command-runner';
import { type RunOnWorkspaceArgs } from 'src/database/commands/command-runners/workspaces-migration.command-runner';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceService } from 'src/engine/metadata-modules/data-source/data-source.service';
import { GlobalWorkspaceOrmManager } from 'src/engine/twenty-orm/global-workspace-datasource/global-workspace-orm.manager';
import { TwentyStandardApplicationService } from 'src/engine/workspace-manager/twenty-standard-application/services/twenty-standard-application.service';

@Command({
  name: 'workspace:sync-standard-objects',
  description:
    'Synchronize standard objects (including newly added ones) for existing workspaces',
})
export class SyncStandardObjectsCommand extends ActiveOrSuspendedWorkspacesMigrationCommandRunner<ActiveOrSuspendedWorkspacesMigrationCommandOptions> {
  constructor(
    @InjectRepository(WorkspaceEntity)
    protected readonly workspaceRepository: Repository<WorkspaceEntity>,
    protected readonly globalWorkspaceOrmManager: GlobalWorkspaceOrmManager,
    protected readonly dataSourceService: DataSourceService,
    private readonly twentyStandardApplicationService: TwentyStandardApplicationService,
  ) {
    super(workspaceRepository, globalWorkspaceOrmManager, dataSourceService);
  }

  override async runOnWorkspace({
    workspaceId,
  }: RunOnWorkspaceArgs): Promise<void> {
    this.logger.log(`Syncing standard objects for workspace: ${workspaceId}`);

    await this.twentyStandardApplicationService.synchronizeTwentyStandardApplicationOrThrow(
      { workspaceId },
    );

    this.logger.log(
      `Successfully synced standard objects for workspace: ${workspaceId}`,
    );
  }
}
