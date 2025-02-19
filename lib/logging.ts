import { db } from '@/db'
import { consoleLog } from '@/db/schema'

export interface LogEntry {
  id: string
  workflowId: string
  executionId: string
  level: string
  message: string
  createdAt: Date
}

export async function persistLog(log: LogEntry) {
  await db.insert(consoleLog).values(log)
}
