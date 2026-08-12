import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const resumeSettings = sqliteTable("resume_settings", {
  id: integer("id").primaryKey(),
  ownerUserId: text("owner_user_id").notNull(),
  tokenHash: text("token_hash").notNull(),
  resumeJson: text("resume_json").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const resumeVisits = sqliteTable("resume_visits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  role: text("role").notNull(),
  visitorId: text("visitor_id"),
  createdAt: text("created_at").notNull(),
});
