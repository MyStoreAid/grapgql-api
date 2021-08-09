-- CreateTable
CREATE TABLE "Manufacturers" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION NOT NULL,
    "isTemporary" BOOLEAN NOT NULL DEFAULT false,
    "server_created_at" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);
