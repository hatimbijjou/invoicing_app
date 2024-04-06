ALTER TABLE "clients" ADD COLUMN "user_uuid" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "clients" ADD CONSTRAINT "clients_user_uuid_users_uuid_fk" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
