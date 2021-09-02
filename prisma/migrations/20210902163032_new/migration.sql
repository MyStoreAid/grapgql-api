-- CreateTable
CREATE TABLE "app_notifications" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "actionMessage" VARCHAR(255),
    "actionPath" VARCHAR(255),
    "active" BOOLEAN NOT NULL DEFAULT false,
    "operation" VARCHAR(255),
    "cron" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "app_notifications_branch_user_groups" (
    "branchUserGroupId" UUID NOT NULL,
    "appNotificationId" UUID NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" UUID NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "status" TEXT NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "request" JSON NOT NULL,
    "assignedTo" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_entries" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "auditId" UUID NOT NULL,
    "branchProductId" UUID NOT NULL,
    "quantityCounted" REAL,
    "storeQuantity" REAL,
    "sellingPrice" REAL,
    "costPrice" REAL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "createdBy" UUID,
    "isBalanced" BOOLEAN,
    "auditDate" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audits" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "createdBy" UUID,
    "isActive" BOOLEAN DEFAULT false,
    "auditDate" DOUBLE PRECISION,
    "status" TEXT,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_goals" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "position" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_product_selling_prices" (
    "id" UUID NOT NULL,
    "branchProductId" UUID,
    "branchId" UUID NOT NULL,
    "pack" REAL NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "stockDescriptionId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_purchases" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "branchProductStockId" UUID NOT NULL,
    "amount" REAL,
    "paymentSource" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "createdBy" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_supplier_order_payment_installments" (
    "id" UUID NOT NULL,
    "amount" REAL,
    "branchSupplierOrderId" UUID NOT NULL,
    "branchSupplierId" UUID NOT NULL,
    "branchSupplierSalespersonId" UUID,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_supplier_orders" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "branchSupplierId" UUID NOT NULL,
    "salespersonId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "orderDate" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_supplier_products" (
    "id" UUID NOT NULL,
    "branchProductId" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "branchSupplierId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "hidden" BOOLEAN DEFAULT false,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_supplier_salespersons" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "branchSupplierId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "hidden" BOOLEAN DEFAULT false,
    "employeeId" UUID,
    "employeeName" VARCHAR(255) NOT NULL,
    "employeeContact" VARCHAR(255) NOT NULL,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_supplier_stocks" (
    "id" UUID NOT NULL,
    "branchProductStockId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_suppliers" (
    "id" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deliveryDays" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "dateAdded" DOUBLE PRECISION,
    "hidden" BOOLEAN DEFAULT false,
    "isTemporary" BOOLEAN DEFAULT false,
    "branchName" VARCHAR(255) NOT NULL,
    "lastModifiedBy" UUID,
    "branchContact" VARCHAR(255),
    "supplierId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch_user_groups" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "startDate" DATE,
    "address" VARCHAR(255),
    "location" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255),
    "phone" VARCHAR(255),
    "whatsAppPhone" VARCHAR(255),
    "companyId" UUID,
    "type" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "checkoutSales" BOOLEAN NOT NULL DEFAULT false,
    "aggregateSales" BOOLEAN NOT NULL DEFAULT true,
    "action" VARCHAR(255),
    "businessCategoryId" UUID,
    "syncInterval" INTEGER,
    "alwaysSync" BOOLEAN NOT NULL DEFAULT false,
    "forTesting" BOOLEAN NOT NULL DEFAULT false,
    "gps" JSON,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "adminLastModifiedBy" VARCHAR(255),
    "lastModifiedBy" UUID,
    "country" VARCHAR(255),
    "region" VARCHAR(255),
    "city" VARCHAR(255),
    "supplierStock" BOOLEAN NOT NULL DEFAULT false,
    "workingDays" VARCHAR(255),
    "sourcesOfPurchases" VARCHAR(255),
    "phoneType" VARCHAR(255),
    "otherServices" VARCHAR(255),
    "locationType" VARCHAR(255),
    "storeImage" VARCHAR(255),
    "serviceType" VARCHAR(255),
    "buildingStructure" VARCHAR(255),
    "coolerBrands" VARCHAR(255),
    "coolerTypes" VARCHAR(255),
    "electricity" VARCHAR(255),
    "yearOfEstablishment" DOUBLE PRECISION,
    "appointmentId" UUID,
    "branchUserGroupId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches_branch_goals" (
    "branchId" UUID NOT NULL,
    "branchGoalId" UUID NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "branches_customers" (
    "branchId" UUID NOT NULL,
    "customerId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "id" UUID NOT NULL,
    "createdBy" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches_product_categories" (
    "productCategoryId" UUID,
    "branchId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "id" UUID
);

-- CreateTable
CREATE TABLE "branches_products" (
    "productId" UUID,
    "branchId" UUID,
    "quantity" REAL,
    "lowestStock" REAL,
    "sellingPrice" REAL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "id" UUID NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "createdBy" UUID,
    "hidden" BOOLEAN DEFAULT false,
    "packs" DOUBLE PRECISION[],
    "packList" JSON,
    "defaultPack" JSON,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches_products_stock_movements" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "branchFrom" UUID NOT NULL,
    "branchTo" UUID NOT NULL,
    "quantity" REAL NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "entryDate" DOUBLE PRECISION NOT NULL DEFAULT 1628505987,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "costPrice" REAL,
    "sellingPrice" REAL,
    "expiryDate" DOUBLE PRECISION,
    "batchNumber" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches_products_stocks" (
    "id" UUID NOT NULL,
    "productId" UUID,
    "branchId" UUID,
    "quantity" REAL,
    "costPrice" REAL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "stockDate" DOUBLE PRECISION NOT NULL DEFAULT 1628505987,
    "branchProductId" UUID,
    "branchSupplierOrderId" UUID,
    "createdBy" UUID,
    "type" TEXT,
    "paymentSource" TEXT,
    "auditId" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "expiryDate" DOUBLE PRECISION,
    "batchNumber" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches_products_stocks_histories" (
    "id" UUID NOT NULL,
    "branchProductStockId" UUID NOT NULL,
    "quantity" REAL,
    "productId" UUID,
    "branchId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "stockDate" DOUBLE PRECISION NOT NULL DEFAULT 1628505987,
    "branchProductId" UUID,
    "createdBy" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_categories_product_categories" (
    "businessCategoryId" UUID NOT NULL,
    "productCategoryId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "cashflow_categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" TEXT,
    "status" TEXT,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cashflows" (
    "id" UUID NOT NULL,
    "amount" REAL NOT NULL,
    "type" TEXT,
    "categoryId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "status" TEXT,
    "createdBy" UUID NOT NULL,
    "statusChangedBy" UUID,
    "dateAdded" DOUBLE PRECISION NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_user_requests" (
    "id" UUID NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "request" JSON NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "lastModifiedBy" UUID,
    "status" TEXT NOT NULL DEFAULT E'to_do',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "name" VARCHAR(255) NOT NULL,
    "displayName" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "lastSyncAt" DOUBLE PRECISION,

    PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "businessCategoryId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "subscriptionId" UUID,
    "email" VARCHAR(255),
    "phone" VARCHAR(255),
    "internalBusinessCategoryId" UUID,
    "adminLastModifiedBy" VARCHAR(255),
    "lastModifiedBy" UUID,
    "lastSyncBy" UUID,
    "lastSyncAt" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies_subscriptions" (
    "companyId" UUID,
    "subscriptionId" UUID,
    "started" DATE,
    "ended" DATE,
    "comments" VARCHAR(255),
    "active" BOOLEAN DEFAULT true,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "companies_sync_histories" (
    "id" UUID NOT NULL,
    "companyId" UUID,
    "lastSyncBy" UUID,
    "lastSyncAt" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "type" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_care_schedules" (
    "userId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "companyId" UUID NOT NULL,
    "reason" VARCHAR(255),
    "appointmentTime" DOUBLE PRECISION,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "branchName" VARCHAR(255) NOT NULL,
    "id" UUID NOT NULL,
    "interviewerFullName" VARCHAR(255) NOT NULL,
    "createdBy" UUID,
    "status" VARCHAR(255),
    "comments" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customercare_supervisors" (
    "supervisorId" UUID NOT NULL,
    "customerCareId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "otherNames" VARCHAR(255),
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "location" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "isTemporary" BOOLEAN DEFAULT false,
    "createdBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "type" VARCHAR(255),
    "entityId" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_types" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "general_settings" (
    "id" UUID NOT NULL,
    "table" VARCHAR(255),
    "lastSyncAt" DOUBLE PRECISION,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_checks" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "status" VARCHAR(255),
    "action" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "localInfo" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internal_business_categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "knex_migrations" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "batch" INTEGER,
    "migration_time" TIMESTAMPTZ(6),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "knex_migrations_lock" (
    "index" SERIAL NOT NULL,
    "is_locked" INTEGER,

    PRIMARY KEY ("index")
);

-- CreateTable
CREATE TABLE "manufacturers" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "isTemporary" BOOLEAN DEFAULT false,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "measurement_units" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "type" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "message" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_histories" (
    "id" UUID NOT NULL,
    "months" TEXT[],
    "datePaid" TIMESTAMPTZ(6) NOT NULL,
    "branchId" UUID NOT NULL,
    "amountPaid" REAL NOT NULL,
    "receipt" VARCHAR(255),
    "adminLastModifiedBy" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "paymentType" TEXT,
    "description" TEXT DEFAULT E'subscription',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parentId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "measurementUnitId" UUID,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "summary" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories_product_segments" (
    "productCategoryId" UUID,
    "productSegmentId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "product_descriptions" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_product_segment_entries" (
    "productId" UUID,
    "productSegmentEntryId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION
);

-- CreateTable
CREATE TABLE "product_segment_entries" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "productSegmentId" UUID NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_segments" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "summary" VARCHAR(255),
    "barCode" VARCHAR(255),
    "manufacturerId" UUID,
    "brandId" UUID,
    "productCategoryId" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "productSegmentId" UUID,
    "measurementUnitId" UUID,
    "weight" REAL,
    "image" VARCHAR(255),
    "isTemporary" BOOLEAN DEFAULT false,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "description" VARCHAR(255),
    "adminLastModifiedBy" VARCHAR(255),
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reconciliation_histories" (
    "id" UUID NOT NULL,
    "sales" REAL NOT NULL DEFAULT 0,
    "expenses" REAL NOT NULL DEFAULT 0,
    "credit" REAL NOT NULL DEFAULT 0,
    "purchases" REAL NOT NULL DEFAULT 0,
    "collections" REAL NOT NULL DEFAULT 0,
    "reconciliationId" UUID NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reconciliations" (
    "id" UUID NOT NULL,
    "startDate" DOUBLE PRECISION NOT NULL,
    "endDate" DOUBLE PRECISION NOT NULL,
    "transactionDate" DOUBLE PRECISION NOT NULL,
    "salesTotal" REAL NOT NULL DEFAULT 0,
    "expensesTotal" REAL NOT NULL DEFAULT 0,
    "creditTotal" REAL NOT NULL DEFAULT 0,
    "purchasesTotal" REAL NOT NULL DEFAULT 0,
    "collectionsTotal" REAL NOT NULL DEFAULT 0,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "durationType" TEXT NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_permissions" (
    "roleId" UUID,
    "permissionId" UUID,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "sale_entries" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "customerId" UUID,
    "discount" REAL DEFAULT 0,
    "costPrice" REAL NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "quantity" REAL,
    "saleId" UUID NOT NULL,
    "entryDate" DOUBLE PRECISION NOT NULL,
    "branchProductId" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "createdBy" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,
    "actualTotalSales" REAL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_installments" (
    "id" UUID NOT NULL,
    "customerId" UUID,
    "saleId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "amount" REAL NOT NULL,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "type" TEXT,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale_return_histories" (
    "id" UUID NOT NULL,
    "saleId" UUID NOT NULL,
    "branchProductId" UUID,
    "productId" UUID NOT NULL,
    "branchId" UUID NOT NULL,
    "createdBy" UUID NOT NULL,
    "returnDate" DOUBLE PRECISION NOT NULL,
    "quantity" REAL NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" UUID NOT NULL,
    "note" VARCHAR(255),
    "paymentStatus" VARCHAR(255),
    "branchId" UUID NOT NULL,
    "customerId" UUID NOT NULL,
    "discount" REAL,
    "salesDate" DOUBLE PRECISION NOT NULL,
    "receiptNumber" VARCHAR(255),
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "type" TEXT DEFAULT E'sales',
    "paymentType" TEXT DEFAULT E'cash',
    "auditId" UUID,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_return_histories" (
    "id" UUID NOT NULL,
    "branchProductId" UUID,
    "branchProductStockId" UUID,
    "productId" UUID,
    "branchId" UUID,
    "createdBy" UUID NOT NULL,
    "returnDate" DOUBLE PRECISION NOT NULL,
    "quantity" REAL NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,
    "server_created_at" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "numberOfBranches" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions_features" (
    "featureId" UUID,
    "subscriptionId" UUID,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255),
    "email" VARCHAR(255),
    "isTemporary" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" UUID,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "dateAdded" DOUBLE PRECISION,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "lastModifiedBy" UUID,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers_companies" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "contact" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "isTemporary" BOOLEAN DEFAULT true,
    "createdBy" UUID NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_changes" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "changes" JSON NOT NULL,
    "type" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "clientName" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("clientName")
);

-- CreateTable
CREATE TABLE "user_access" (
    "userId" UUID NOT NULL,
    "access" JSONB,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "users" (
    "userId" UUID NOT NULL,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "firstName" VARCHAR(255),
    "otherNames" VARCHAR(255),
    "phone" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255),
    "gender" TEXT,
    "whatsAppPhone" VARCHAR(255),
    "status" VARCHAR(255),
    "otp" VARCHAR(255),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "isCustomerCarePersonnel" BOOLEAN NOT NULL DEFAULT false,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "isSupervisor" BOOLEAN NOT NULL DEFAULT false,
    "adminLastModifiedBy" VARCHAR(255),
    "lastModifiedBy" UUID,
    "country" VARCHAR(255),
    "languagesSpoken" VARCHAR(255),
    "logins" INTEGER NOT NULL DEFAULT 0,
    "lastLogin" TIMESTAMPTZ(6),
    "isRecruiter" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "users_branches" (
    "userId" UUID,
    "branchId" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "addedPermissionIds" JSONB DEFAULT E'[]',
    "excludedPermissionIds" JSONB DEFAULT E'[]',
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "companyId" UUID NOT NULL,
    "employeeTypeId" UUID,
    "customerCareId" VARCHAR(255),
    "main" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT DEFAULT E'active',
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "server_created_at" DOUBLE PRECISION,
    "last_modified" DOUBLE PRECISION,
    "id" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_companies" (
    "userId" UUID NOT NULL,
    "companyId" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "addedPermissionIds" JSONB DEFAULT E'[]',
    "excludedPermissionIds" JSONB DEFAULT E'[]',
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "id" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients.name_unique" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients.displayName_unique" ON "clients"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "product_descriptions.name_unique" ON "product_descriptions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_segment_entries.name_unique" ON "product_segment_entries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_segments.name_unique" ON "product_segments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products.name_unique" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tokens.clientName_unique" ON "tokens"("clientName");

-- CreateIndex
CREATE UNIQUE INDEX "tokens.token_unique" ON "tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "user_access.userId_unique" ON "user_access"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users.phone_unique" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users.username_unique" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users.whatsAppPhone_unique" ON "users"("whatsAppPhone");

-- AddForeignKey
ALTER TABLE "app_notifications_branch_user_groups" ADD FOREIGN KEY ("appNotificationId") REFERENCES "app_notifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_notifications_branch_user_groups" ADD FOREIGN KEY ("branchUserGroupId") REFERENCES "branch_user_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD FOREIGN KEY ("assignedTo") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("auditId") REFERENCES "audits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_entries" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audits" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audits" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audits" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_product_selling_prices" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_product_selling_prices" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_product_selling_prices" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_product_selling_prices" ADD FOREIGN KEY ("stockDescriptionId") REFERENCES "product_descriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_purchases" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_purchases" ADD FOREIGN KEY ("branchProductStockId") REFERENCES "branches_products_stocks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_purchases" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_purchases" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("branchSupplierId") REFERENCES "branch_suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("branchSupplierOrderId") REFERENCES "branch_supplier_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("branchSupplierSalespersonId") REFERENCES "branch_supplier_salespersons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_order_payment_installments" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_orders" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_orders" ADD FOREIGN KEY ("branchSupplierId") REFERENCES "branch_suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_orders" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_orders" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_orders" ADD FOREIGN KEY ("salespersonId") REFERENCES "branch_supplier_salespersons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("branchSupplierId") REFERENCES "branch_suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_products" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_salespersons" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_salespersons" ADD FOREIGN KEY ("branchSupplierId") REFERENCES "branch_suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_salespersons" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_salespersons" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_stocks" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_stocks" ADD FOREIGN KEY ("branchProductStockId") REFERENCES "branches_products_stocks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_stocks" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_supplier_stocks" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_suppliers" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_suppliers" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branch_suppliers" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD FOREIGN KEY ("appointmentId") REFERENCES "appointments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD FOREIGN KEY ("branchUserGroupId") REFERENCES "branch_user_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD FOREIGN KEY ("businessCategoryId") REFERENCES "business_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_branch_goals" ADD FOREIGN KEY ("branchGoalId") REFERENCES "branch_goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_branch_goals" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_customers" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_customers" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_customers" ADD FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_customers" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_product_categories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_product_categories" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_product_categories" ADD FOREIGN KEY ("productCategoryId") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stock_movements" ADD FOREIGN KEY ("branchFrom") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stock_movements" ADD FOREIGN KEY ("branchTo") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stock_movements" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stock_movements" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stock_movements" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("auditId") REFERENCES "audits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("branchProductStockId") REFERENCES "branches_products_stocks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches_products_stocks_histories" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflow_categories" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD FOREIGN KEY ("categoryId") REFERENCES "cashflow_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashflows" ADD FOREIGN KEY ("statusChangedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_user_requests" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD FOREIGN KEY ("businessCategoryId") REFERENCES "business_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD FOREIGN KEY ("internalBusinessCategoryId") REFERENCES "internal_business_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD FOREIGN KEY ("lastSyncBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD FOREIGN KEY ("subscriptionId") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies_subscriptions" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies_subscriptions" ADD FOREIGN KEY ("subscriptionId") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies_sync_histories" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies_sync_histories" ADD FOREIGN KEY ("lastSyncBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_care_schedules" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_care_schedules" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_care_schedules" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_care_schedules" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_care_schedules" ADD FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customercare_supervisors" ADD FOREIGN KEY ("customerCareId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customercare_supervisors" ADD FOREIGN KEY ("supervisorId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_checks" ADD FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD FOREIGN KEY ("measurementUnitId") REFERENCES "measurement_units"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD FOREIGN KEY ("parentId") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories_product_segments" ADD FOREIGN KEY ("productCategoryId") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories_product_segments" ADD FOREIGN KEY ("productSegmentId") REFERENCES "product_segments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_product_segment_entries" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_product_segment_entries" ADD FOREIGN KEY ("productSegmentEntryId") REFERENCES "product_segment_entries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_segment_entries" ADD FOREIGN KEY ("productSegmentId") REFERENCES "product_segments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("description") REFERENCES "product_descriptions"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("manufacturerId") REFERENCES "manufacturers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("measurementUnitId") REFERENCES "measurement_units"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("productCategoryId") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY ("productSegmentId") REFERENCES "product_segments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliation_histories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliation_histories" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliation_histories" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliation_histories" ADD FOREIGN KEY ("reconciliationId") REFERENCES "reconciliations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliations" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliations" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reconciliations" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_entries" ADD FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_installments" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_installments" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_installments" ADD FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_installments" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_installments" ADD FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale_return_histories" ADD FOREIGN KEY ("saleId") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD FOREIGN KEY ("auditId") REFERENCES "audits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("branchProductId") REFERENCES "branches_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("branchProductStockId") REFERENCES "branches_products_stocks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_return_histories" ADD FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions_features" ADD FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions_features" ADD FOREIGN KEY ("subscriptionId") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers_companies" ADD FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sync_changes" ADD FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD FOREIGN KEY ("clientName") REFERENCES "clients"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("lastModifiedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_branches" ADD FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_branches" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_branches" ADD FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_branches" ADD FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_companies" ADD FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_companies" ADD FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_companies" ADD FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
