/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/brigade/src/brigade.module.ts":
/*!********************************************!*\
  !*** ./apps/brigade/src/brigade.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrigadeModuleApp = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const requirements_bridage_module_1 = __webpack_require__(/*! ./requirements_brigade/requirements_bridage.module */ "./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts");
const brigade_module_1 = __webpack_require__(/*! ./brigade/brigade.module */ "./apps/brigade/src/brigade/brigade.module.ts");
let BrigadeModuleApp = class BrigadeModuleApp {
};
exports.BrigadeModuleApp = BrigadeModuleApp;
exports.BrigadeModuleApp = BrigadeModuleApp = __decorate([
    (0, common_1.Module)({
        imports: [requirements_bridage_module_1.RequirementsBrigadeModule, brigade_module_1.BrigadeModule, src_1.DatabaseModule],
        controllers: [],
        providers: [],
    })
], BrigadeModuleApp);


/***/ }),

/***/ "./apps/brigade/src/brigade/brigade.controller.ts":
/*!********************************************************!*\
  !*** ./apps/brigade/src/brigade/brigade.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrigadeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const brigade_service_1 = __webpack_require__(/*! ./brigade.service */ "./apps/brigade/src/brigade/brigade.service.ts");
const create_bridage_dto_1 = __webpack_require__(/*! @libs/contracts/bridage/create-bridage.dto */ "./libs/contracts/bridage/create-bridage.dto.ts");
let BrigadeController = class BrigadeController {
    brigadeService;
    constructor(brigadeService) {
        this.brigadeService = brigadeService;
    }
    async createBrigade(data) {
        return await this.brigadeService.createBrigade(data);
    }
    async getBrigade() {
        return await this.brigadeService.getAllBrigade();
    }
    async getOneBrigade() {
        return await this.brigadeService.getOneBrigade("");
    }
};
exports.BrigadeController = BrigadeController;
__decorate([
    (0, microservices_1.MessagePattern)("brigade.createBrigade"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_bridage_dto_1.CreateBrigadeFileDto !== "undefined" && create_bridage_dto_1.CreateBrigadeFileDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "createBrigade", null);
__decorate([
    (0, microservices_1.MessagePattern)("brigade.getBrigade"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "getBrigade", null);
__decorate([
    (0, microservices_1.MessagePattern)("brigade.getOneBrigade"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "getOneBrigade", null);
exports.BrigadeController = BrigadeController = __decorate([
    (0, common_1.Controller)('bridage'),
    __metadata("design:paramtypes", [typeof (_a = typeof brigade_service_1.BrigadeService !== "undefined" && brigade_service_1.BrigadeService) === "function" ? _a : Object])
], BrigadeController);


/***/ }),

/***/ "./apps/brigade/src/brigade/brigade.module.ts":
/*!****************************************************!*\
  !*** ./apps/brigade/src/brigade/brigade.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrigadeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const requirements_bridage_module_1 = __webpack_require__(/*! ../requirements_brigade/requirements_bridage.module */ "./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts");
const brigade_controller_1 = __webpack_require__(/*! ./brigade.controller */ "./apps/brigade/src/brigade/brigade.controller.ts");
const brigade_service_1 = __webpack_require__(/*! ./brigade.service */ "./apps/brigade/src/brigade/brigade.service.ts");
const requirements_brigade_1 = __webpack_require__(/*! ../requirements_brigade/provider/requirements-brigade */ "./apps/brigade/src/requirements_brigade/provider/requirements-brigade.ts");
const brigade_1 = __webpack_require__(/*! ./provider/brigade */ "./apps/brigade/src/brigade/provider/brigade.ts");
const aws_module_1 = __webpack_require__(/*! @aws/aws.module */ "./shared/lib/aws/src/aws.module.ts");
let BrigadeModule = class BrigadeModule {
};
exports.BrigadeModule = BrigadeModule;
exports.BrigadeModule = BrigadeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DatabaseModule,
            my_logger_1.MyLoggerModule,
            aws_module_1.AwsModule,
            requirements_bridage_module_1.RequirementsBrigadeModule,
        ],
        controllers: [brigade_controller_1.BrigadeController],
        providers: [brigade_service_1.BrigadeService, ...brigade_1.brigadeProviders, ...requirements_brigade_1.requirementsBrigadeProviders],
        exports: [brigade_service_1.BrigadeService, ...brigade_1.brigadeProviders],
    })
], BrigadeModule);


/***/ }),

/***/ "./apps/brigade/src/brigade/brigade.service.ts":
/*!*****************************************************!*\
  !*** ./apps/brigade/src/brigade/brigade.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrigadeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const requirements_bridage_service_1 = __webpack_require__(/*! ../requirements_brigade/requirements_bridage.service */ "./apps/brigade/src/requirements_brigade/requirements_bridage.service.ts");
const brigade_entity_1 = __webpack_require__(/*! ./entity/brigade.entity */ "./apps/brigade/src/brigade/entity/brigade.entity.ts");
const aws_service_1 = __webpack_require__(/*! @aws/aws.service */ "./shared/lib/aws/src/aws.service.ts");
let BrigadeService = class BrigadeService {
    requirementsBrigadeService;
    brigadeRepository;
    awsService;
    constructor(requirementsBrigadeService, brigadeRepository, awsService) {
        this.requirementsBrigadeService = requirementsBrigadeService;
        this.brigadeRepository = brigadeRepository;
        this.awsService = awsService;
    }
    async createBrigade(data) {
        try {
            const { requirementsBrigade, shortName, file, name, description } = data;
            const transformedRequirements = await this.requirementsBrigadeService.transformRequirementsBrigade(requirementsBrigade);
            let imgURL;
            if (file) {
                imgURL = await this.awsService.createPhoto(file);
            }
            const brigade = new brigade_entity_1.Brigade();
            brigade.shortName = shortName;
            brigade.name = name;
            brigade.description = description;
            brigade.image = imgURL;
            brigade.requirementsBrigade = transformedRequirements;
            const saveBrigade = await this.brigadeRepository.save(brigade);
            return { brigade: saveBrigade };
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred');
        }
    }
    async getAllBrigade() {
        try {
            const brigades = await this.brigadeRepository.find();
            return { brigades: brigades };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred');
        }
    }
    async getOneBrigade(brigadeId) {
        try {
            if (!mongodb_1.ObjectId.isValid(brigadeId)) {
                throw new common_1.BadRequestException('Invalid brigade ID');
            }
            const brigadeRepository = this.brigadeRepository;
            const brigade = await brigadeRepository.findOneBy({
                _id: new mongodb_1.ObjectId(brigadeId)
            });
            if (!brigade) {
                throw new common_1.NotFoundException(`Brigade  not found`);
            }
            return {
                brigade,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findBrigadeById(id) {
        try {
            const brigade = await this.brigadeRepository.findOneBy({ _id: new mongodb_1.ObjectId(id) });
            return brigade;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw 'An unexpected error occurred';
        }
    }
};
exports.BrigadeService = BrigadeService;
exports.BrigadeService = BrigadeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => requirements_bridage_service_1.RequirementsBrigadeService))),
    __param(1, (0, common_1.Inject)('BRIGADE_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof requirements_bridage_service_1.RequirementsBrigadeService !== "undefined" && requirements_bridage_service_1.RequirementsBrigadeService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.MongoRepository !== "undefined" && typeorm_1.MongoRepository) === "function" ? _b : Object, typeof (_c = typeof aws_service_1.AwsService !== "undefined" && aws_service_1.AwsService) === "function" ? _c : Object])
], BrigadeService);


/***/ }),

/***/ "./apps/brigade/src/brigade/entity/brigade.entity.ts":
/*!***********************************************************!*\
  !*** ./apps/brigade/src/brigade/entity/brigade.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Brigade = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const requirements_brigade_entity_1 = __webpack_require__(/*! ../../requirements_brigade/entity/requirements-brigade.entity */ "./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts");
let Brigade = class Brigade {
    _id;
    name;
    description;
    image;
    shortName;
    requirementsBrigade;
};
exports.Brigade = Brigade;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _a : Object)
], Brigade.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brigade.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brigade.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brigade.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Brigade.prototype, "shortName", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => requirements_brigade_entity_1.RequirementsBrigade),
    __metadata("design:type", Array)
], Brigade.prototype, "requirementsBrigade", void 0);
exports.Brigade = Brigade = __decorate([
    (0, typeorm_1.Entity)("brigade")
], Brigade);


/***/ }),

/***/ "./apps/brigade/src/brigade/provider/brigade.ts":
/*!******************************************************!*\
  !*** ./apps/brigade/src/brigade/provider/brigade.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.brigadeProviders = void 0;
const brigade_entity_1 = __webpack_require__(/*! ../entity/brigade.entity */ "./apps/brigade/src/brigade/entity/brigade.entity.ts");
exports.brigadeProviders = [
    {
        provide: 'BRIGADE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getMongoRepository(brigade_entity_1.Brigade),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts":
/*!*************************************************************************************!*\
  !*** ./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequirementsBrigade = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
class RequirementsBrigade {
    exercise;
    minimum;
    maximum;
    constructor(exercise, minimum, maximum) {
        this.exercise = exercise;
        if (minimum !== undefined) {
            this.minimum = minimum;
        }
        if (maximum !== undefined) {
            this.maximum = maximum;
        }
    }
}
exports.RequirementsBrigade = RequirementsBrigade;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RequirementsBrigade.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], RequirementsBrigade.prototype, "minimum", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], RequirementsBrigade.prototype, "maximum", void 0);


/***/ }),

/***/ "./apps/brigade/src/requirements_brigade/provider/requirements-brigade.ts":
/*!********************************************************************************!*\
  !*** ./apps/brigade/src/requirements_brigade/provider/requirements-brigade.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requirementsBrigadeProviders = void 0;
const requirements_brigade_entity_1 = __webpack_require__(/*! ../entity/requirements-brigade.entity */ "./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts");
exports.requirementsBrigadeProviders = [
    {
        provide: 'REQUIREMENT_BRIGADE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(requirements_brigade_entity_1.RequirementsBrigade),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts":
/*!******************************************************************************!*\
  !*** ./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequirementsBrigadeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const requirements_brigade_1 = __webpack_require__(/*! ./provider/requirements-brigade */ "./apps/brigade/src/requirements_brigade/provider/requirements-brigade.ts");
const requirements_bridage_service_1 = __webpack_require__(/*! ./requirements_bridage.service */ "./apps/brigade/src/requirements_brigade/requirements_bridage.service.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
let RequirementsBrigadeModule = class RequirementsBrigadeModule {
};
exports.RequirementsBrigadeModule = RequirementsBrigadeModule;
exports.RequirementsBrigadeModule = RequirementsBrigadeModule = __decorate([
    (0, common_1.Module)({
        imports: [src_1.DatabaseModule],
        providers: [requirements_bridage_service_1.RequirementsBrigadeService, ...requirements_brigade_1.requirementsBrigadeProviders],
        exports: [requirements_bridage_service_1.RequirementsBrigadeService, ...requirements_brigade_1.requirementsBrigadeProviders],
    })
], RequirementsBrigadeModule);


/***/ }),

/***/ "./apps/brigade/src/requirements_brigade/requirements_bridage.service.ts":
/*!*******************************************************************************!*\
  !*** ./apps/brigade/src/requirements_brigade/requirements_bridage.service.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequirementsBrigadeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const requirements_brigade_entity_1 = __webpack_require__(/*! ./entity/requirements-brigade.entity */ "./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts");
let RequirementsBrigadeService = class RequirementsBrigadeService {
    requirementsBrigadeRestory;
    constructor(requirementsBrigadeRestory) {
        this.requirementsBrigadeRestory = requirementsBrigadeRestory;
    }
    async transformRequirementsBrigade(requirementsBrigade) {
        try {
            const traansformedRequirements = requirementsBrigade.map((elem, index) => (new requirements_brigade_entity_1.RequirementsBrigade(elem.exercise, elem?.minimum, elem?.maximum)));
            return traansformedRequirements;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw 'An unexpected error occurred';
        }
    }
};
exports.RequirementsBrigadeService = RequirementsBrigadeService;
exports.RequirementsBrigadeService = RequirementsBrigadeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REQUIREMENT_BRIGADE_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], RequirementsBrigadeService);


/***/ }),

/***/ "./apps/users/src/user/entity/user.entity.ts":
/*!***************************************************!*\
  !*** ./apps/users/src/user/entity/user.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
let User = class User {
    _id;
    email;
    name;
    icon;
    password;
    brigadeId;
    DailyWorkoutsIds;
    FirstWorkoutICheckndicatorId;
    state;
    refreshToken;
};
exports.User = User;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeof (_a = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _a : Object)
], User.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _b : Object)
], User.prototype, "brigadeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], User.prototype, "DailyWorkoutsIds", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_c = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _c : Object)
], User.prototype, "FirstWorkoutICheckndicatorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);


/***/ }),

/***/ "./apps/workouts/src/daily-workouts/entity/daily-workouts.entity.ts":
/*!**************************************************************************!*\
  !*** ./apps/workouts/src/daily-workouts/entity/daily-workouts.entity.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DailyWorkouts = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
let DailyWorkouts = class DailyWorkouts {
    _id;
    name;
    description;
    day;
    state;
    userComment;
    commentToDay;
    exercisesId;
    userId;
};
exports.DailyWorkouts = DailyWorkouts;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeof (_a = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _a : Object)
], DailyWorkouts.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DailyWorkouts.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DailyWorkouts.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DailyWorkouts.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DailyWorkouts.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DailyWorkouts.prototype, "userComment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DailyWorkouts.prototype, "commentToDay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], DailyWorkouts.prototype, "exercisesId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_c = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _c : Object)
], DailyWorkouts.prototype, "userId", void 0);
exports.DailyWorkouts = DailyWorkouts = __decorate([
    (0, typeorm_1.Entity)()
], DailyWorkouts);


/***/ }),

/***/ "./apps/workouts/src/exercises/entity/exercises.ts":
/*!*********************************************************!*\
  !*** ./apps/workouts/src/exercises/entity/exercises.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Exercises = void 0;
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Exercises = class Exercises {
    _id;
    exercise;
    name;
    count;
    userCount;
    comment;
    imgUrl;
    state;
    description;
    videoLink;
};
exports.Exercises = Exercises;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", typeof (_a = typeof mongodb_1.ObjectId !== "undefined" && mongodb_1.ObjectId) === "function" ? _a : Object)
], Exercises.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Object)
], Exercises.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "userCount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Exercises.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercises.prototype, "videoLink", void 0);
exports.Exercises = Exercises = __decorate([
    (0, typeorm_1.Entity)("exercises")
], Exercises);


/***/ }),

/***/ "./libs/config/aws.config.ts":
/*!***********************************!*\
  !*** ./libs/config/aws.config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('aws', () => ({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    bucketName: process.env.AWS_BUCKET_NAME,
}));


/***/ }),

/***/ "./libs/contracts/bridage/create-bridage.dto.ts":
/*!******************************************************!*\
  !*** ./libs/contracts/bridage/create-bridage.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBrigadeFileDto = exports.CreateBrigadeDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const create_requirement_bridage_1 = __webpack_require__(/*! ./create-requirement-bridage */ "./libs/contracts/bridage/create-requirement-bridage.ts");
class CreateBrigadeDto {
    name;
    shortName;
    description;
    requirementsBrigade;
}
exports.CreateBrigadeDto = CreateBrigadeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBrigadeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBrigadeDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBrigadeDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return value.map(item => {
                try {
                    return typeof item === 'string' ? JSON.parse(item) : item;
                }
                catch (e) {
                }
            });
        }
        return [];
    }),
    (0, class_transformer_1.Type)(() => create_requirement_bridage_1.CreateRequirementsBrigade),
    __metadata("design:type", Array)
], CreateBrigadeDto.prototype, "requirementsBrigade", void 0);
class CreateBrigadeFileDto extends CreateBrigadeDto {
    file;
}
exports.CreateBrigadeFileDto = CreateBrigadeFileDto;


/***/ }),

/***/ "./libs/contracts/bridage/create-requirement-bridage.ts":
/*!**************************************************************!*\
  !*** ./libs/contracts/bridage/create-requirement-bridage.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRequirementsBrigade = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRequirementsBrigade {
    exercise;
    minimum;
    maximum;
}
exports.CreateRequirementsBrigade = CreateRequirementsBrigade;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRequirementsBrigade.prototype, "exercise", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRequirementsBrigade.prototype, "minimum", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRequirementsBrigade.prototype, "maximum", void 0);


/***/ }),

/***/ "./libs/database/src/config/configuration.ts":
/*!***************************************************!*\
  !*** ./libs/database/src/config/configuration.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
(__webpack_require__(/*! dotenv */ "dotenv").config)();
exports["default"] = () => ({
    db_url: process.env.DATABASE_URL,
});


/***/ }),

/***/ "./libs/database/src/database.module.ts":
/*!**********************************************!*\
  !*** ./libs/database/src/database.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./libs/database/src/database.providers.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configuration_1 = __webpack_require__(/*! ./config/configuration */ "./libs/database/src/config/configuration.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
        ],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);


/***/ }),

/***/ "./libs/database/src/database.providers.ts":
/*!*************************************************!*\
  !*** ./libs/database/src/database.providers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseProviders = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const daily_workouts_entity_1 = __webpack_require__(/*! apps/workouts/src/daily-workouts/entity/daily-workouts.entity */ "./apps/workouts/src/daily-workouts/entity/daily-workouts.entity.ts");
const user_entity_1 = __webpack_require__(/*! apps/users/src/user/entity/user.entity */ "./apps/users/src/user/entity/user.entity.ts");
const configuration_1 = __webpack_require__(/*! ./config/configuration */ "./libs/database/src/config/configuration.ts");
const brigade_entity_1 = __webpack_require__(/*! apps/brigade/src/brigade/entity/brigade.entity */ "./apps/brigade/src/brigade/entity/brigade.entity.ts");
const requirements_brigade_entity_1 = __webpack_require__(/*! apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity */ "./apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity.ts");
const exercises_1 = __webpack_require__(/*! apps/workouts/src/exercises/entity/exercises */ "./apps/workouts/src/exercises/entity/exercises.ts");
const config = (0, configuration_1.default)();
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mongodb',
                url: config.db_url,
                database: 'test',
                entities: [user_entity_1.User, brigade_entity_1.Brigade, daily_workouts_entity_1.DailyWorkouts, requirements_brigade_entity_1.RequirementsBrigade, exercises_1.Exercises],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];


/***/ }),

/***/ "./libs/database/src/index.ts":
/*!************************************!*\
  !*** ./libs/database/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/database/src/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./database.providers */ "./libs/database/src/database.providers.ts"), exports);


/***/ }),

/***/ "./libs/filter/src/filter.module.ts":
/*!******************************************!*\
  !*** ./libs/filter/src/filter.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const filter_service_1 = __webpack_require__(/*! ./filter.service */ "./libs/filter/src/filter.service.ts");
let FilterModule = class FilterModule {
};
exports.FilterModule = FilterModule;
exports.FilterModule = FilterModule = __decorate([
    (0, common_1.Module)({
        providers: [filter_service_1.RpcHttpExceptionFilter],
        exports: [filter_service_1.RpcHttpExceptionFilter],
    })
], FilterModule);


/***/ }),

/***/ "./libs/filter/src/filter.service.ts":
/*!*******************************************!*\
  !*** ./libs/filter/src/filter.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcHttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let RpcHttpExceptionFilter = class RpcHttpExceptionFilter {
    catch(exception, host) {
        const status = exception.getStatus();
        const response = exception.getResponse();
        const message = typeof response === 'string'
            ? response
            : response?.message || 'Unexpected error';
        return (0, rxjs_1.throwError)(() => ({
            statusCode: status,
            message,
        }));
    }
};
exports.RpcHttpExceptionFilter = RpcHttpExceptionFilter;
exports.RpcHttpExceptionFilter = RpcHttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_2.HttpException)
], RpcHttpExceptionFilter);


/***/ }),

/***/ "./libs/filter/src/index.ts":
/*!**********************************!*\
  !*** ./libs/filter/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./filter.module */ "./libs/filter/src/filter.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./filter.service */ "./libs/filter/src/filter.service.ts"), exports);


/***/ }),

/***/ "./libs/my-logger/src/index.ts":
/*!*************************************!*\
  !*** ./libs/my-logger/src/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./my-logger.module */ "./libs/my-logger/src/my-logger.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./my-logger.service */ "./libs/my-logger/src/my-logger.service.ts"), exports);


/***/ }),

/***/ "./libs/my-logger/src/my-logger.module.ts":
/*!************************************************!*\
  !*** ./libs/my-logger/src/my-logger.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyLoggerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const my_logger_service_1 = __webpack_require__(/*! ./my-logger.service */ "./libs/my-logger/src/my-logger.service.ts");
let MyLoggerModule = class MyLoggerModule {
};
exports.MyLoggerModule = MyLoggerModule;
exports.MyLoggerModule = MyLoggerModule = __decorate([
    (0, common_1.Module)({
        providers: [my_logger_service_1.MyLoggerService],
        exports: [my_logger_service_1.MyLoggerService],
    })
], MyLoggerModule);


/***/ }),

/***/ "./libs/my-logger/src/my-logger.service.ts":
/*!*************************************************!*\
  !*** ./libs/my-logger/src/my-logger.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyLoggerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let MyLoggerService = class MyLoggerService {
    log(message, ...optionalParams) {
        console.log('[LOG]', message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        console.error('[ERROR]', message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        console.warn('[WARN]', message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        console.debug('[DEBUG]', message, ...optionalParams);
    }
    verbose(message, ...optionalParams) {
        console.info('[VERBOSE]', message, ...optionalParams);
    }
    fatal(message, ...optionalParams) {
        console.error('[FATAL]', message, ...optionalParams);
    }
};
exports.MyLoggerService = MyLoggerService;
exports.MyLoggerService = MyLoggerService = __decorate([
    (0, common_1.Injectable)()
], MyLoggerService);


/***/ }),

/***/ "./shared/lib/aws/src/aws.module.ts":
/*!******************************************!*\
  !*** ./shared/lib/aws/src/aws.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const aws_service_1 = __webpack_require__(/*! ./aws.service */ "./shared/lib/aws/src/aws.service.ts");
const aws_config_1 = __webpack_require__(/*! @libs/config/aws.config */ "./libs/config/aws.config.ts");
let AwsModule = class AwsModule {
};
exports.AwsModule = AwsModule;
exports.AwsModule = AwsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [aws_config_1.default],
            }),
        ],
        providers: [
            {
                provide: 'CONFIGURATION(aws)',
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('aws'),
            },
            aws_service_1.AwsService,
        ],
        exports: [aws_service_1.AwsService],
    })
], AwsModule);


/***/ }),

/***/ "./shared/lib/aws/src/aws.service.ts":
/*!*******************************************!*\
  !*** ./shared/lib/aws/src/aws.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_s3_1 = __webpack_require__(/*! @aws-sdk/client-s3 */ "@aws-sdk/client-s3");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AwsService = class AwsService {
    configService;
    s3;
    awsConfig;
    constructor(configService) {
        this.configService = configService;
        this.awsConfig = this.configService.get('aws');
        this.s3 = new client_s3_1.S3Client({
            region: this.awsConfig.region,
            credentials: {
                accessKeyId: this.awsConfig.accessKeyId,
                secretAccessKey: this.awsConfig.secretAccessKey,
            },
        });
    }
    async createPhoto(file) {
        try {
            const name = this.generateArticle();
            if (!file || !file.buffer) {
                throw new Error('Invalid file: buffer is missing.');
            }
            console.log(this.awsConfig.bucketName);
            const params = {
                Bucket: this.awsConfig.bucketName,
                Key: name,
                Body: Buffer.from(file.buffer.data),
                ContentType: file.mimetype,
            };
            console.log(params);
            await this.s3.send(new client_s3_1.PutObjectCommand(params));
            const fileUrl = `https://${this.awsConfig.bucketName}.s3.${this.awsConfig.region}.amazonaws.com/${name}`;
            console.log(fileUrl);
            return fileUrl;
        }
        catch (error) {
            console.error('S3 Upload Error:', error);
            throw new Error('Error uploading file to S3.');
        }
    }
    async remove_photo(url) {
        const parts = url.split('/');
        const name = parts[parts.length - 1];
        const params = {
            Bucket: this.awsConfig.bucketName,
            Key: name,
        };
        return this.s3.send(new client_s3_1.DeleteObjectCommand(params));
    }
    generateArticle() {
        const timestamp = Date.now().toString();
        const randomPart = Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, '0');
        let article = timestamp.slice(-8) + randomPart;
        while (article.length < 12) {
            article = '0' + article;
        }
        console.log(article);
        return article;
    }
};
exports.AwsService = AwsService;
exports.AwsService = AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AwsService);


/***/ }),

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/brigade/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const brigade_module_1 = __webpack_require__(/*! ./brigade.module */ "./apps/brigade/src/brigade.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const filter_1 = __webpack_require__(/*! @app/filter */ "./libs/filter/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(brigade_module_1.BrigadeModuleApp, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'brigade_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalFilters(new filter_1.RpcHttpExceptionFilter());
    await app.listen();
}
bootstrap();

})();

/******/ })()
;