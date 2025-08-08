import { ExecutorContext, PromiseExecutor, runExecutor } from '@nx/devkit';
import { MyExecutorExecutorSchema } from './schema';

const myExecutor: PromiseExecutor<MyExecutorExecutorSchema> = async (
  options,
  context: ExecutorContext,
) => {
  const project = options.project;
  console.log('Executor ran for MyExecutor', options);
  
  if (!project) {
    console.error('❌ Project name is required');
    return { success: false };
  }

  try {
    // Run build target
    console.log(`🔨 Building project: ${project}`);
    const buildIterator = await runExecutor(
      { project, target: 'build' },
      {},
      context
    );

    for await (const result of buildIterator) {
      if (!result.success) {
        console.error('❌ Build failed');
        return { success: false };
      }
    }
    
    console.log('✅ Build completed successfully');

    // Run serve target
    console.log(`🚀 Starting serve for project: ${project}`);
    const serveIterator = await runExecutor(
      { project, target: 'serve' },
      {},
      context
    );

    for await (const result of serveIterator) {
      // `serve` typically runs forever, so you might handle logs or return early
      console.log('🚀 App is being served...');
      // For demo purposes, we'll break after first success
      if (result.success) {
        console.log('✅ Serve started successfully');
        break;
      }
    }
  } catch (error) {
    console.error('❌ Executor failed:', error);
    return { success: false };
  }

  return {
    success: true,
  };
};

export default myExecutor;
