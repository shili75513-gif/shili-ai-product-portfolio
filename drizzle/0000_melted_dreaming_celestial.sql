CREATE TABLE `resume_settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`owner_user_id` text NOT NULL,
	`token_hash` text NOT NULL,
	`resume_json` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `resume_visits` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`role` text NOT NULL,
	`visitor_id` text,
	`created_at` text NOT NULL
);
