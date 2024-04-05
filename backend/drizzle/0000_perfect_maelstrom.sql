CREATE TABLE IF NOT EXISTS "users" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar(256),
	"password" varchar(256),
	"phone" varchar(256),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
