ALTER TABLE "users" ADD COLUMN "username" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");