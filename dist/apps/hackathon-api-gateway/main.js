/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./apps/hackathon-api-gateway/src/auth/auth.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/auth/auth.controller.ts ***!
  \****************************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/hackathon-api-gateway/src/auth/auth.service.ts");
const registration_dto_1 = __webpack_require__(/*! @libs/contracts/users/registration.dto */ "./libs/contracts/users/registration.dto.ts");
const src_1 = __webpack_require__(/*! @libs/guards/src */ "./libs/guards/src/index.ts");
const refresh_access_token_dto_1 = __webpack_require__(/*! @libs/contracts/users/refresh-access-token.dto */ "./libs/contracts/users/refresh-access-token.dto.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async registration(data) {
        return await this.authService.registration(data);
    }
    async login(req) {
        return await this.authService.login(req.user);
    }
    async refresh(data) {
        return await this.authService.refresh(data);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("registration"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof registration_dto_1.RegistrationDto !== "undefined" && registration_dto_1.RegistrationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.UseGuards)(src_1.LocalAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("refresh"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof refresh_access_token_dto_1.RefreshAccessTokenDto !== "undefined" && refresh_access_token_dto_1.RefreshAccessTokenDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/auth/auth.module.ts":
/*!************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/auth/auth.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/hackathon-api-gateway/src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/hackathon-api-gateway/src/auth/auth.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const strategy_1 = __webpack_require__(/*! @app/strategy */ "./libs/strategy/src/index.ts");
const src_1 = __webpack_require__(/*! @libs/guards/src */ "./libs/guards/src/index.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            strategy_1.StrategyModule,
            src_1.GuardsModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/auth/auth.service.ts":
/*!*************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/auth/auth.service.ts ***!
  \*************************************************************/
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
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let AuthService = class AuthService {
    usersClient;
    constructor(usersClient) {
        this.usersClient = usersClient;
    }
    async registration(data) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send("auth.registration", data));
    }
    async login(data) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send("auth.login", data));
    }
    async refresh(data) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send("auth.refresh", data));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AuthService);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/brigade/bridage.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/brigade/bridage.controller.ts ***!
  \**********************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrigadeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bridage_service_1 = __webpack_require__(/*! ./bridage.service */ "./apps/hackathon-api-gateway/src/brigade/bridage.service.ts");
const Multer = __webpack_require__(/*! multer */ "multer");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const create_bridage_dto_1 = __webpack_require__(/*! @libs/contracts/bridage/create-bridage.dto */ "./libs/contracts/bridage/create-bridage.dto.ts");
let BrigadeController = class BrigadeController {
    brigadeService;
    constructor(brigadeService) {
        this.brigadeService = brigadeService;
    }
    async createBrigade(file, data) {
        console.log(file.brigadeImg[0].buffer);
        const img = file?.brigadeImg[0] ? file?.brigadeImg[0] : undefined;
        return await this.brigadeService.createBrigade(data, img);
    }
    async getBrigade() {
        return await this.brigadeService.getBrigades();
    }
    async getOneBrigade(id) {
        return await this.brigadeService.getBrigade(id);
    }
};
exports.BrigadeController = BrigadeController;
__decorate([
    (0, common_1.Post)("create-brigade"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'brigadeImg', maxCount: 1 }], {
        storage: Multer.memoryStorage(),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof create_bridage_dto_1.CreateBrigadeDto !== "undefined" && create_bridage_dto_1.CreateBrigadeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "createBrigade", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "getBrigade", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrigadeController.prototype, "getOneBrigade", null);
exports.BrigadeController = BrigadeController = __decorate([
    (0, common_1.Controller)('brigade'),
    __metadata("design:paramtypes", [typeof (_a = typeof bridage_service_1.BrigadeService !== "undefined" && bridage_service_1.BrigadeService) === "function" ? _a : Object])
], BrigadeController);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/brigade/bridage.module.ts":
/*!******************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/brigade/bridage.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BridageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const Multer = __webpack_require__(/*! multer */ "multer");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const bridage_controller_1 = __webpack_require__(/*! ./bridage.controller */ "./apps/hackathon-api-gateway/src/brigade/bridage.controller.ts");
const bridage_service_1 = __webpack_require__(/*! ./bridage.service */ "./apps/hackathon-api-gateway/src/brigade/bridage.service.ts");
const brigade_1 = __webpack_require__(/*! apps/brigade/src/brigade/provider/brigade */ "./apps/brigade/src/brigade/provider/brigade.ts");
const requirements_brigade_1 = __webpack_require__(/*! apps/brigade/src/requirements_brigade/provider/requirements-brigade */ "./apps/brigade/src/requirements_brigade/provider/requirements-brigade.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const aws_config_1 = __webpack_require__(/*! @libs/config/aws.config */ "./libs/config/aws.config.ts");
const aws_service_1 = __webpack_require__(/*! @aws/aws.service */ "./shared/lib/aws/src/aws.service.ts");
let BridageModule = class BridageModule {
};
exports.BridageModule = BridageModule;
exports.BridageModule = BridageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DatabaseModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'BRIGADE_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'brigade_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
            config_1.ConfigModule.forRoot({
                load: [aws_config_1.default],
            }),
            platform_express_1.MulterModule.register({
                storage: Multer.memoryStorage(),
                limits: {
                    fileSize: 10 * 1024 * 1024,
                },
            })
        ],
        controllers: [bridage_controller_1.BrigadeController],
        providers: [bridage_service_1.BrigadeService,
            ...brigade_1.brigadeProviders,
            ...requirements_brigade_1.requirementsBrigadeProviders,
            aws_service_1.AwsService],
    })
], BridageModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/brigade/bridage.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/brigade/bridage.service.ts ***!
  \*******************************************************************/
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
exports.BrigadeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let BrigadeService = class BrigadeService {
    brigadeClient;
    constructor(brigadeClient) {
        this.brigadeClient = brigadeClient;
    }
    async createBrigade(data, file) {
        const payload = {
            file,
            ...data
        };
        return await (0, rxjs_1.firstValueFrom)(this.brigadeClient.send("brigade.createBrigade", payload));
    }
    async getBrigades() {
        return await (0, rxjs_1.firstValueFrom)(this.brigadeClient.send("brigade.getBrigade", {}));
    }
    async getBrigade(id) {
        return await (0, rxjs_1.firstValueFrom)(this.brigadeClient.send("brigade.getOneBrigade", { id }));
    }
};
exports.BrigadeService = BrigadeService;
exports.BrigadeService = BrigadeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("BRIGADE_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], BrigadeService);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/hackathon-api-gateway.module.ts":
/*!************************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/hackathon-api-gateway.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HackathonApiGatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/hackathon-api-gateway/src/user/user.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/hackathon-api-gateway/src/auth/auth.module.ts");
const bridage_module_1 = __webpack_require__(/*! ./brigade/bridage.module */ "./apps/hackathon-api-gateway/src/brigade/bridage.module.ts");
const user_indicator_module_1 = __webpack_require__(/*! ./user-indicator/user-indicator.module */ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.module.ts");
const workouts_module_1 = __webpack_require__(/*! ./workouts/workouts.module */ "./apps/hackathon-api-gateway/src/workouts/workouts.module.ts");
let HackathonApiGatewayModule = class HackathonApiGatewayModule {
};
exports.HackathonApiGatewayModule = HackathonApiGatewayModule;
exports.HackathonApiGatewayModule = HackathonApiGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, auth_module_1.AuthModule, bridage_module_1.BridageModule, user_indicator_module_1.UserIndicatorModule, workouts_module_1.WorkoutsModule],
        controllers: [],
        providers: [],
    })
], HackathonApiGatewayModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.controller.ts":
/*!************************************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user-indicator/user-indicator.controller.ts ***!
  \************************************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserIndicatorController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_indicator_service_1 = __webpack_require__(/*! ./user-indicator.service */ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.service.ts");
const src_1 = __webpack_require__(/*! @libs/guards/src */ "./libs/guards/src/index.ts");
let UserIndicatorController = class UserIndicatorController {
    userIndicatorService;
    constructor(userIndicatorService) {
        this.userIndicatorService = userIndicatorService;
    }
    async get(data) {
        return this.userIndicatorService.get(data.user);
    }
};
exports.UserIndicatorController = UserIndicatorController;
__decorate([
    (0, common_1.Get)("create"),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserIndicatorController.prototype, "get", null);
exports.UserIndicatorController = UserIndicatorController = __decorate([
    (0, common_1.Controller)('user-indicator'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_indicator_service_1.UserIndicatorService !== "undefined" && user_indicator_service_1.UserIndicatorService) === "function" ? _a : Object])
], UserIndicatorController);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.module.ts":
/*!********************************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user-indicator/user-indicator.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserIndicatorModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_indicator_service_1 = __webpack_require__(/*! ./user-indicator.service */ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.service.ts");
const user_indicator_controller_1 = __webpack_require__(/*! ./user-indicator.controller */ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./apps/hackathon-api-gateway/src/user/user.module.ts");
const brigade_module_1 = __webpack_require__(/*! apps/brigade/src/brigade/brigade.module */ "./apps/brigade/src/brigade/brigade.module.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const requirements_bridage_module_1 = __webpack_require__(/*! apps/brigade/src/requirements_brigade/requirements_bridage.module */ "./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
let UserIndicatorModule = class UserIndicatorModule {
};
exports.UserIndicatorModule = UserIndicatorModule;
exports.UserIndicatorModule = UserIndicatorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_INDICATOR_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_indicator_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
            user_module_1.UserModule,
            brigade_module_1.BrigadeModule,
            axios_1.HttpModule,
            requirements_bridage_module_1.RequirementsBrigadeModule,
            my_logger_1.MyLoggerModule,
        ],
        controllers: [user_indicator_controller_1.UserIndicatorController],
        providers: [user_indicator_service_1.UserIndicatorService],
    })
], UserIndicatorModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user-indicator/user-indicator.service.ts":
/*!*********************************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user-indicator/user-indicator.service.ts ***!
  \*********************************************************************************/
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
exports.UserIndicatorService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let UserIndicatorService = class UserIndicatorService {
    usersClient;
    constructor(usersClient) {
        this.usersClient = usersClient;
    }
    async get(data) {
        console.log("aafa");
        return this.usersClient.send('userIndicator.createCheckingIndicators', data);
    }
};
exports.UserIndicatorService = UserIndicatorService;
exports.UserIndicatorService = UserIndicatorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_INDICATOR_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserIndicatorService);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user/user.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user/user.controller.ts ***!
  \****************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/hackathon-api-gateway/src/user/user.service.ts");
const src_1 = __webpack_require__(/*! @libs/guards/src */ "./libs/guards/src/index.ts");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return "user";
    }
    async get(data) {
        return this.userService.get(data.user);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(""),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user/user.module.ts":
/*!************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user/user.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/hackathon-api-gateway/src/user/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/hackathon-api-gateway/src/user/user.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const Multer = __webpack_require__(/*! multer */ "multer");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
            platform_express_1.MulterModule.register({
                storage: Multer.memoryStorage(),
                limits: {
                    fileSize: 10 * 1024 * 1024,
                },
            }),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/user/user.service.ts":
/*!*************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/user/user.service.ts ***!
  \*************************************************************/
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
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let UserService = class UserService {
    usersClient;
    constructor(usersClient) {
        this.usersClient = usersClient;
    }
    async findAll() {
        return this.usersClient.send("user.findAll", {});
    }
    async get(data) {
        return this.usersClient.send("user.get", data);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/workouts/workouts.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/workouts/workouts.controller.ts ***!
  \************************************************************************/
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkoutsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const workouts_service_1 = __webpack_require__(/*! ./workouts.service */ "./apps/hackathon-api-gateway/src/workouts/workouts.service.ts");
const src_1 = __webpack_require__(/*! @libs/guards/src */ "./libs/guards/src/index.ts");
const exercises_1 = __webpack_require__(/*! apps/workouts/src/exercises/entity/exercises */ "./apps/workouts/src/exercises/entity/exercises.ts");
let WorkoutsController = class WorkoutsController {
    workoutsService;
    constructor(workoutsService) {
        this.workoutsService = workoutsService;
    }
    async cereateFirst(data) {
        return this.workoutsService.createFirstWorkout(data.user.userId);
    }
    async getfirstWorkouts(data) {
        return await this.workoutsService.getFirstWorkout(data.user.userId);
    }
    async getWorkouts(data) {
        return await this.workoutsService.getWorkout(data.user.userId);
    }
    async endFirst(data, user) {
        console.log("start");
        return this.workoutsService.endFirstWorkout(user.user.userId, data);
    }
    async fast(data) {
        return this.workoutsService.fast(data);
    }
};
exports.WorkoutsController = WorkoutsController;
__decorate([
    (0, common_1.Post)("create-first-workout"),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkoutsController.prototype, "cereateFirst", null);
__decorate([
    (0, common_1.Get)("get-first-workout"),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkoutsController.prototype, "getfirstWorkouts", null);
__decorate([
    (0, common_1.Get)("get-workout"),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkoutsController.prototype, "getWorkouts", null);
__decorate([
    (0, common_1.Post)("end-first-workout"),
    (0, common_1.UseGuards)(src_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof exercises_1.Exercises !== "undefined" && exercises_1.Exercises) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], WorkoutsController.prototype, "endFirst", null);
__decorate([
    (0, common_1.Post)("fast-workout"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkoutsController.prototype, "fast", null);
exports.WorkoutsController = WorkoutsController = __decorate([
    (0, common_1.Controller)('workouts'),
    __metadata("design:paramtypes", [typeof (_a = typeof workouts_service_1.WorkoutsService !== "undefined" && workouts_service_1.WorkoutsService) === "function" ? _a : Object])
], WorkoutsController);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/workouts/workouts.module.ts":
/*!********************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/workouts/workouts.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkoutsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const workouts_service_1 = __webpack_require__(/*! ./workouts.service */ "./apps/hackathon-api-gateway/src/workouts/workouts.service.ts");
const workouts_controller_1 = __webpack_require__(/*! ./workouts.controller */ "./apps/hackathon-api-gateway/src/workouts/workouts.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./apps/hackathon-api-gateway/src/user/user.module.ts");
const brigade_module_1 = __webpack_require__(/*! apps/brigade/src/brigade/brigade.module */ "./apps/brigade/src/brigade/brigade.module.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const requirements_bridage_module_1 = __webpack_require__(/*! apps/brigade/src/requirements_brigade/requirements_bridage.module */ "./apps/brigade/src/requirements_brigade/requirements_bridage.module.ts");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
let WorkoutsModule = class WorkoutsModule {
};
exports.WorkoutsModule = WorkoutsModule;
exports.WorkoutsModule = WorkoutsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "WORKOUTS_SERVICE",
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'workouts_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
            user_module_1.UserModule,
            brigade_module_1.BrigadeModule,
            axios_1.HttpModule,
            requirements_bridage_module_1.RequirementsBrigadeModule,
            my_logger_1.MyLoggerModule,
        ],
        controllers: [workouts_controller_1.WorkoutsController],
        providers: [workouts_service_1.WorkoutsService],
    })
], WorkoutsModule);


/***/ }),

/***/ "./apps/hackathon-api-gateway/src/workouts/workouts.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/workouts/workouts.service.ts ***!
  \*********************************************************************/
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
exports.WorkoutsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let WorkoutsService = class WorkoutsService {
    wrkoutsClient;
    constructor(wrkoutsClient) {
        this.wrkoutsClient = wrkoutsClient;
    }
    async createFirstWorkout(idUser) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.wrkoutsClient.send("workouts.create-first-workouts", idUser));
        }
        catch (error) {
            throw error;
        }
    }
    async getWorkout(idUser) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.wrkoutsClient.send("workouts.get-workouts", idUser));
        }
        catch (error) {
            throw error;
        }
    }
    async getFirstWorkout(idUser) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.wrkoutsClient.send("workouts.get-first-workouts", idUser));
        }
        catch (error) {
            throw error;
        }
    }
    async endFirstWorkout(idUser, exercises) {
        try {
            console.log(exercises);
            return await (0, rxjs_1.firstValueFrom)(this.wrkoutsClient.send("workouts.end-first-workout", { idUser, exercises }));
        }
        catch (error) {
            throw error;
        }
    }
    async fast(data) {
        try {
            console.log(data);
            return await (0, rxjs_1.firstValueFrom)(this.wrkoutsClient.send("workouts.fast-create-workout", data));
        }
        catch (error) {
            throw error;
        }
    }
};
exports.WorkoutsService = WorkoutsService;
exports.WorkoutsService = WorkoutsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("WORKOUTS_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], WorkoutsService);


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

/***/ "./libs/constants.ts":
/*!***************************!*\
  !*** ./libs/constants.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
(__webpack_require__(/*! dotenv */ "dotenv").config)();
exports.jwtConstants = {
    access_secret: process.env.SECRET ? process.env.SECRET : "secret",
    refresh_secret: process.env.refresh_secret ? process.env.refresh_secret : "secret_refresh"
};


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

/***/ "./libs/contracts/users/refresh-access-token.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/contracts/users/refresh-access-token.dto.ts ***!
  \**********************************************************/
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
exports.RefreshAccessTokenDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RefreshAccessTokenDto {
    refreshToken;
}
exports.RefreshAccessTokenDto = RefreshAccessTokenDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshAccessTokenDto.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./libs/contracts/users/registration.dto.ts":
/*!**************************************************!*\
  !*** ./libs/contracts/users/registration.dto.ts ***!
  \**************************************************/
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
exports.RegistrationDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegistrationDto {
    password;
    email;
    name;
    brigadId;
}
exports.RegistrationDto = RegistrationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistrationDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegistrationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistrationDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistrationDto.prototype, "brigadId", void 0);


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

/***/ "./libs/guards/src/auth.guard.ts":
/*!***************************************!*\
  !*** ./libs/guards/src/auth.guard.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./libs/guards/src/guards.module.ts":
/*!******************************************!*\
  !*** ./libs/guards/src/guards.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuardsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const local_auth_guard_1 = __webpack_require__(/*! ./local-auth.guard */ "./libs/guards/src/local-auth.guard.ts");
const src_1 = __webpack_require__(/*! @libs/strategy/src */ "./libs/strategy/src/index.ts");
const auth_guard_1 = __webpack_require__(/*! ./auth.guard */ "./libs/guards/src/auth.guard.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let GuardsModule = class GuardsModule {
};
exports.GuardsModule = GuardsModule;
exports.GuardsModule = GuardsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
        ],
        providers: [local_auth_guard_1.LocalAuthGuard, auth_guard_1.JwtAuthGuard, src_1.LocalStrategy, src_1.JwtStrategy],
        exports: [local_auth_guard_1.LocalAuthGuard, auth_guard_1.JwtAuthGuard],
    })
], GuardsModule);


/***/ }),

/***/ "./libs/guards/src/index.ts":
/*!**********************************!*\
  !*** ./libs/guards/src/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./guards.module */ "./libs/guards/src/guards.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth.guard */ "./libs/guards/src/auth.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./local-auth.guard */ "./libs/guards/src/local-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/guards/src/local-auth.guard.ts":
/*!*********************************************!*\
  !*** ./libs/guards/src/local-auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


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

/***/ "./libs/strategy/src/auth.strategy.ts":
/*!********************************************!*\
  !*** ./libs/strategy/src/auth.strategy.ts ***!
  \********************************************/
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
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.access_secret,
        });
    }
    async validate(payload) {
        return { userId: payload.sub, name: payload.name };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),

/***/ "./libs/strategy/src/index.ts":
/*!************************************!*\
  !*** ./libs/strategy/src/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./strategy.module */ "./libs/strategy/src/strategy.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./local.strategy */ "./libs/strategy/src/local.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth.strategy */ "./libs/strategy/src/auth.strategy.ts"), exports);


/***/ }),

/***/ "./libs/strategy/src/local.strategy.ts":
/*!*********************************************!*\
  !*** ./libs/strategy/src/local.strategy.ts ***!
  \*********************************************/
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
exports.LocalStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    usersClient;
    constructor(usersClient) {
        super({ usernameField: 'email', passReqToCallback: false });
        this.usersClient = usersClient;
    }
    async validate(email, password) {
        const user = await (0, rxjs_1.firstValueFrom)(this.usersClient.send("auth.validateUser", { email, password }));
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_SERVICE")),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./libs/strategy/src/strategy.module.ts":
/*!**********************************************!*\
  !*** ./libs/strategy/src/strategy.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategyModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./libs/strategy/src/local.strategy.ts");
const auth_strategy_1 = __webpack_require__(/*! ./auth.strategy */ "./libs/strategy/src/auth.strategy.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants.ts");
let StrategyModule = class StrategyModule {
};
exports.StrategyModule = StrategyModule;
exports.StrategyModule = StrategyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'user_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
            passport_1.PassportModule.register({ session: false }),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.access_secret,
                signOptions: { expiresIn: "24h" },
            })
        ],
        providers: [local_strategy_1.LocalStrategy, auth_strategy_1.JwtStrategy],
        exports: [local_strategy_1.LocalStrategy, jwt_1.JwtModule, auth_strategy_1.JwtStrategy],
    })
], StrategyModule);


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

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

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
/*!************************************************!*\
  !*** ./apps/hackathon-api-gateway/src/main.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const hackathon_api_gateway_module_1 = __webpack_require__(/*! ./hackathon-api-gateway.module */ "./apps/hackathon-api-gateway/src/hackathon-api-gateway.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(hackathon_api_gateway_module_1.HackathonApiGatewayModule);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;