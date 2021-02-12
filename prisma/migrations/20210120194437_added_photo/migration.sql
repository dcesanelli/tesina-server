-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUri" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "locationLat" DECIMAL(65,30) NOT NULL,
    "locationLng" DECIMAL(65,30) NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
