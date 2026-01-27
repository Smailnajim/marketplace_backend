-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "permitons" TEXT[],

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actif" (
    "id" SERIAL NOT NULL,
    "vendeurId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "previews" TEXT[],
    "source" TEXT[],

    CONSTRAINT "Actif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActifToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ActifToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_ActifToCategory_B_index" ON "_ActifToCategory"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actif" ADD CONSTRAINT "Actif_vendeurId_fkey" FOREIGN KEY ("vendeurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActifToCategory" ADD CONSTRAINT "_ActifToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Actif"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActifToCategory" ADD CONSTRAINT "_ActifToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
