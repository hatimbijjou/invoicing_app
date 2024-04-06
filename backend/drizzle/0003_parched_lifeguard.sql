ALTER TABLE "clients" DROP CONSTRAINT "clients_user_uuid_users_uuid_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "clients" ADD CONSTRAINT "clients_user_uuid_users_uuid_fk" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
