/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./apps/users/src/user/user.controller.ts":
/*!************************************************!*\
  !*** ./apps/users/src/user/user.controller.ts ***!
  \************************************************/
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
exports.UserController = void 0;
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/users/src/user/user.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const get_user_dto_1 = __webpack_require__(/*! @libs/contracts/users/get-user.dto */ "./libs/contracts/users/get-user.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async get(data) {
        return await this.userService.findById(data.userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, microservices_1.MessagePattern)('user.get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_user_dto_1.GetUserDto !== "undefined" && get_user_dto_1.GetUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/users/src/user/user.module.ts":
/*!********************************************!*\
  !*** ./apps/users/src/user/user.module.ts ***!
  \********************************************/
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
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/users/src/user/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/users/src/user/user.controller.ts");
const user_providers_1 = __webpack_require__(/*! ./user.providers */ "./apps/users/src/user/user.providers.ts");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [src_1.DatabaseModule, my_logger_1.MyLoggerModule],
        controllers: [user_controller_1.UserController],
        providers: [...user_providers_1.userProviders, user_service_1.UserService],
        exports: [user_service_1.UserService, ...user_providers_1.userProviders],
    })
], UserModule);


/***/ }),

/***/ "./apps/users/src/user/user.providers.ts":
/*!***********************************************!*\
  !*** ./apps/users/src/user/user.providers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userProviders = void 0;
const user_entity_1 = __webpack_require__(/*! ./entity/user.entity */ "./apps/users/src/user/entity/user.entity.ts");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/users/src/user/user.service.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/user/user.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
let UserService = class UserService {
    userRepository;
    logger;
    constructor(userRepository, logger) {
        this.userRepository = userRepository;
        this.logger = logger;
    }
    async findOne(email) {
        try {
            return await this.userRepository.findOne({
                where: { email },
                relations: ['bridage', 'dailyWorkout'],
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Get user failed.');
        }
    }
    async findById(id) {
        try {
            return await this.userRepository.findOne({
                where: { _id: new mongodb_1.ObjectId(id) },
                relations: ['bridage', 'dailyWorkout'],
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Get user failed.');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof my_logger_1.MyLoggerService !== "undefined" && my_logger_1.MyLoggerService) === "function" ? _b : Object])
], UserService);


/***/ }),

/***/ "./apps/workouts/src/daily-workouts/daily-workouts.controller.ts":
/*!***********************************************************************!*\
  !*** ./apps/workouts/src/daily-workouts/daily-workouts.controller.ts ***!
  \***********************************************************************/
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
exports.DailyWorkoutsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const daily_workouts_service_1 = __webpack_require__(/*! ./daily-workouts.service */ "./apps/workouts/src/daily-workouts/daily-workouts.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let DailyWorkoutsController = class DailyWorkoutsController {
    dailyWorkoutsService;
    constructor(dailyWorkoutsService) {
        this.dailyWorkoutsService = dailyWorkoutsService;
    }
    async createFirstWorkoutsCheckIndicators(idUser) {
        return await this.dailyWorkoutsService.createFirstWorkoutsCheckIndicators(idUser);
    }
    async getFirstWorkouts(idUser) {
        console.log("a");
        return await this.dailyWorkoutsService.getFirstWorkouts(idUser);
    }
    async getWorkouts(idUser) {
        return await this.dailyWorkoutsService.getWorkouts(idUser);
    }
    async endFirstWorkouts(data) {
        console.log(data);
        return await this.dailyWorkoutsService.endFirstExercises(data.idUser, data.exercises);
    }
    async fast(data) {
        console.log(data);
        return await this.dailyWorkoutsService.fastCreate(data);
    }
};
exports.DailyWorkoutsController = DailyWorkoutsController;
__decorate([
    (0, microservices_1.MessagePattern)("workouts.create-first-workouts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DailyWorkoutsController.prototype, "createFirstWorkoutsCheckIndicators", null);
__decorate([
    (0, microservices_1.MessagePattern)("workouts.get-first-workouts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DailyWorkoutsController.prototype, "getFirstWorkouts", null);
__decorate([
    (0, microservices_1.MessagePattern)("workouts.get-workouts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DailyWorkoutsController.prototype, "getWorkouts", null);
__decorate([
    (0, microservices_1.MessagePattern)("workouts.end-first-workout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DailyWorkoutsController.prototype, "endFirstWorkouts", null);
__decorate([
    (0, microservices_1.MessagePattern)("workouts.fast-create-workout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DailyWorkoutsController.prototype, "fast", null);
exports.DailyWorkoutsController = DailyWorkoutsController = __decorate([
    (0, common_1.Controller)('daily-workouts'),
    __metadata("design:paramtypes", [typeof (_a = typeof daily_workouts_service_1.DailyWorkoutsService !== "undefined" && daily_workouts_service_1.DailyWorkoutsService) === "function" ? _a : Object])
], DailyWorkoutsController);


/***/ }),

/***/ "./apps/workouts/src/daily-workouts/daily-workouts.module.ts":
/*!*******************************************************************!*\
  !*** ./apps/workouts/src/daily-workouts/daily-workouts.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DailyWorkoutsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const daily_workouts_service_1 = __webpack_require__(/*! ./daily-workouts.service */ "./apps/workouts/src/daily-workouts/daily-workouts.service.ts");
const daily_workouts_controller_1 = __webpack_require__(/*! ./daily-workouts.controller */ "./apps/workouts/src/daily-workouts/daily-workouts.controller.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const open_router_config_1 = __webpack_require__(/*! @libs/config/open-router.config */ "./libs/config/open-router.config.ts");
const exercises_module_1 = __webpack_require__(/*! ../exercises/exercises.module */ "./apps/workouts/src/exercises/exercises.module.ts");
const exercises_provides_1 = __webpack_require__(/*! ../exercises/provider/exercises.provides */ "./apps/workouts/src/exercises/provider/exercises.provides.ts");
const daily_workouts_providers_1 = __webpack_require__(/*! ./provider/daily-workouts.providers */ "./apps/workouts/src/daily-workouts/provider/daily-workouts.providers.ts");
const ai_router_module_1 = __webpack_require__(/*! shared/lib/ai-router/ai-router.module */ "./shared/lib/ai-router/ai-router.module.ts");
const ai_router_service_1 = __webpack_require__(/*! shared/lib/ai-router/ai-router.service */ "./shared/lib/ai-router/ai-router.service.ts");
const user_module_1 = __webpack_require__(/*! apps/users/src/user/user.module */ "./apps/users/src/user/user.module.ts");
let DailyWorkoutsModule = class DailyWorkoutsModule {
};
exports.DailyWorkoutsModule = DailyWorkoutsModule;
exports.DailyWorkoutsModule = DailyWorkoutsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DatabaseModule,
            user_module_1.UserModule,
            axios_1.HttpModule,
            my_logger_1.MyLoggerModule,
            exercises_module_1.ExercisesModule,
            ai_router_module_1.AiRouterModule,
            config_1.ConfigModule.forRoot({
                load: [open_router_config_1.default],
            }),
        ],
        controllers: [daily_workouts_controller_1.DailyWorkoutsController],
        providers: [daily_workouts_service_1.DailyWorkoutsService, ai_router_service_1.AiRouterService, ...exercises_provides_1.exercisesProviders, ...daily_workouts_providers_1.dailyWorkoutsProviders],
        exports: [...daily_workouts_providers_1.dailyWorkoutsProviders]
    })
], DailyWorkoutsModule);


/***/ }),

/***/ "./apps/workouts/src/daily-workouts/daily-workouts.service.ts":
/*!********************************************************************!*\
  !*** ./apps/workouts/src/daily-workouts/daily-workouts.service.ts ***!
  \********************************************************************/
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
exports.DailyWorkoutsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! apps/users/src/user/user.service */ "./apps/users/src/user/user.service.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const exercises_service_1 = __webpack_require__(/*! ../exercises/exercises.service */ "./apps/workouts/src/exercises/exercises.service.ts");
let DailyWorkoutsService = class DailyWorkoutsService {
    userService;
    exercisesService;
    userRepository;
    dailyWorkoutsRepository;
    constructor(userService, exercisesService, userRepository, dailyWorkoutsRepository) {
        this.userService = userService;
        this.exercisesService = exercisesService;
        this.userRepository = userRepository;
        this.dailyWorkoutsRepository = dailyWorkoutsRepository;
    }
    async createFirstWorkoutsCheckIndicators(idUser) {
        try {
            const user = await this.userService.findById(idUser);
            if (user.FirstWorkoutICheckndicatorId) {
                throw new common_1.InternalServerErrorException('User alerdi have firstWorkouts ');
            }
            const data = {
                name: "check your indicator",
                description: "A workout designed to help you assess your physical condition through a series of exercises that monitor strength, endurance, and flexibility. Ideal for tracking progress and identifying areas for improvement.",
                userId: idUser,
            };
            const saveWorkouts = await this.createWorkouts(data);
            user.FirstWorkoutICheckndicatorId = saveWorkouts._id;
            this.userRepository.save(user);
            return "";
        }
        catch (error) {
            throw error;
        }
    }
    async createWorkouts(data) {
        try {
            const daily = this.dailyWorkoutsRepository.create({
                name: data.name,
                description: data.description,
                userId: data.userId,
                state: false,
                exercisesId: data?.exercisesId?.map(id => id.toString()),
                day: new Date()
            });
            const res = await this.dailyWorkoutsRepository.save(daily);
            return res;
        }
        catch (error) {
            throw error;
        }
    }
    async getFirstWorkouts(idUser) {
        try {
            const user = await this.userService.findById(idUser);
            if (!user.FirstWorkoutICheckndicatorId) {
                throw new common_1.InternalServerErrorException('Usere alerdy have firstWorkouts ');
            }
            return await this.getWorkoutsWithExercises(user.FirstWorkoutICheckndicatorId);
        }
        catch (error) {
            throw error;
        }
    }
    async endFirstExercises(idUser, exercises) {
        try {
            const user = await this.userService.findById(idUser);
            const brigade = {
                "name": "Бригада морської піхоти ЗСУ",
                "shortName": "МП",
                "description": "Морська піхота України — елітний род військ, призначений для ведення бойових дій на суходолі, морі та прибережній зоні. Висока адаптація до складних погодних умов, довготривалих маршів та раптових змін середовища. Фізичні нормативи морпіхів надзвичайно жорсткі — вони повинні працювати в бронежилетах, з озброєнням та спорядженням в умовах підвищеного ризику.",
                "requirementsBrigade": [
                    {
                        "exercise": "Біг з навантаженням 10 кг (1000 м)",
                        "minimum": 4.5,
                        "maximum": 6
                    },
                    {
                        "exercise": "Підтягування у бронежилеті",
                        "minimum": 6,
                        "maximum": null
                    },
                    {
                        "exercise": "Плавання 100 м",
                        "minimum": 2.5,
                        "maximum": 4
                    },
                    {
                        "exercise": "Віджимання",
                        "minimum": 35,
                        "maximum": null
                    },
                    {
                        "exercise": "Присідання з навантаженням",
                        "minimum": 30,
                        "maximum": null
                    }
                ]
            };
            return "";
        }
        catch (error) {
            throw error;
        }
    }
    async checkExercise(idDaily) {
        try {
            const workouts = await this.getWorkoutsWithExercises(idDaily);
        }
        catch (error) {
            throw error;
        }
    }
    async fastCreate(date) {
        try {
            const user = await this.userService.findById("68153bdbe35d79a29d4baed8");
            const exercisesId = await this.exercisesService.createExercises(date.exercises);
            const data = {
                name: "Відновлювальний тренувальний комплекс",
                description: "Повний тренувальний комплекс для сили та витривалості. Цей день відпочинку дозволяє відновити сили після важких тренувань, підготувати тіло до нових викликів і зменшити ризик травм. Відпочинок допомагає відновити м'язи, відновити енергетичні запаси і запобігти перенавантаженню організму. Для солдатів це критично важливо, адже фізична витривалість, швидкість відновлення і здатність до адаптації безпосередньо впливають на ефективність виконання завдань. Це час для відновлення, який дозволяє бути готовим до будь-яких фізичних навантажень, що можуть виникнути під час служби.",
                userId: "68153bdbe35d79a29d4baed8",
                exercisesId: exercisesId
            };
            const saveWorkouts = await this.createWorkouts(data);
            user.DailyWorkoutsIds.push(saveWorkouts._id);
            return this.userRepository.save(user);
        }
        catch (e) {
            throw e;
        }
    }
    async getWorkouts(idUser) {
        try {
            const user = await this.userService.findById(idUser);
            if (!user) {
                throw new common_1.InternalServerErrorException('User alerdi have firstWorkouts ');
            }
            const res = await Promise.all(user.DailyWorkoutsIds.map(async (elem) => await this.getWorkoutsWithExercises(elem)));
            console.log(res[0].exercises);
            return res;
        }
        catch (error) {
            throw error;
        }
    }
    async getWorkoutsWithExercises(id) {
        try {
            const workouts = await this.dailyWorkoutsRepository.findOne({
                where: {
                    _id: new mongodb_1.ObjectId(id)
                }
            });
            if (!workouts?.exercisesId)
                return { exercises: null, workouts };
            const exercises = await this.exercisesService.getExercises(workouts.exercisesId);
            return { workouts, exercises };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.DailyWorkoutsService = DailyWorkoutsService;
exports.DailyWorkoutsService = DailyWorkoutsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(3, (0, common_1.Inject)('DAILY_WORKOUTS')),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof exercises_service_1.ExercisesService !== "undefined" && exercises_service_1.ExercisesService) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.MongoRepository !== "undefined" && typeorm_1.MongoRepository) === "function" ? _d : Object])
], DailyWorkoutsService);


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

/***/ "./apps/workouts/src/daily-workouts/provider/daily-workouts.providers.ts":
/*!*******************************************************************************!*\
  !*** ./apps/workouts/src/daily-workouts/provider/daily-workouts.providers.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dailyWorkoutsProviders = void 0;
const daily_workouts_entity_1 = __webpack_require__(/*! ../entity/daily-workouts.entity */ "./apps/workouts/src/daily-workouts/entity/daily-workouts.entity.ts");
exports.dailyWorkoutsProviders = [
    {
        provide: 'DAILY_WORKOUTS',
        useFactory: (dataSource) => dataSource.getRepository(daily_workouts_entity_1.DailyWorkouts),
        inject: ['DATA_SOURCE'],
    },
];


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

/***/ "./apps/workouts/src/exercises/exercises.controller.ts":
/*!*************************************************************!*\
  !*** ./apps/workouts/src/exercises/exercises.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExercisesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const exercises_service_1 = __webpack_require__(/*! ./exercises.service */ "./apps/workouts/src/exercises/exercises.service.ts");
let ExercisesController = class ExercisesController {
    exercisesService;
    constructor(exercisesService) {
        this.exercisesService = exercisesService;
    }
};
exports.ExercisesController = ExercisesController;
exports.ExercisesController = ExercisesController = __decorate([
    (0, common_1.Controller)('exercises'),
    __metadata("design:paramtypes", [typeof (_a = typeof exercises_service_1.ExercisesService !== "undefined" && exercises_service_1.ExercisesService) === "function" ? _a : Object])
], ExercisesController);


/***/ }),

/***/ "./apps/workouts/src/exercises/exercises.module.ts":
/*!*********************************************************!*\
  !*** ./apps/workouts/src/exercises/exercises.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExercisesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const exercises_service_1 = __webpack_require__(/*! ./exercises.service */ "./apps/workouts/src/exercises/exercises.service.ts");
const exercises_controller_1 = __webpack_require__(/*! ./exercises.controller */ "./apps/workouts/src/exercises/exercises.controller.ts");
const exercises_provides_1 = __webpack_require__(/*! ./provider/exercises.provides */ "./apps/workouts/src/exercises/provider/exercises.provides.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
let ExercisesModule = class ExercisesModule {
};
exports.ExercisesModule = ExercisesModule;
exports.ExercisesModule = ExercisesModule = __decorate([
    (0, common_1.Module)({
        imports: [src_1.DatabaseModule],
        controllers: [exercises_controller_1.ExercisesController],
        providers: [exercises_service_1.ExercisesService, ...exercises_provides_1.exercisesProviders],
        exports: [exercises_service_1.ExercisesService, ...exercises_provides_1.exercisesProviders]
    })
], ExercisesModule);


/***/ }),

/***/ "./apps/workouts/src/exercises/exercises.service.ts":
/*!**********************************************************!*\
  !*** ./apps/workouts/src/exercises/exercises.service.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExercisesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
let ExercisesService = class ExercisesService {
    exercisesRepository;
    constructor(exercisesRepository) {
        this.exercisesRepository = exercisesRepository;
    }
    async createExercise(data) {
        try {
            const exercise = this.exercisesRepository.create({
                name: data.name,
                exercise: data.exercise,
                count: null,
                state: false,
                description: data.description
            });
            return await this.exercisesRepository.save(exercise);
        }
        catch (error) {
            throw error;
        }
    }
    async getExercises(id) {
        try {
            const objectIds = id.map(i => new mongodb_1.ObjectId(i));
            const exercises = await this.exercisesRepository.find({
                where: {
                    _id: {
                        $in: objectIds
                    }
                }
            });
            return exercises;
        }
        catch (error) {
            throw error;
        }
    }
    async endExercises(comment, updateExercise) {
        try {
            const result = await this.exercisesRepository.updateOne({ _id: new mongodb_1.ObjectId(updateExercise.exercise._id) }, {
                $set: {
                    comment: comment,
                    userCount: updateExercise.exercise.userCount,
                    state: true,
                },
            });
            if (result.matchedCount === 0) {
                throw new Error('Update operation failed - no documents matched');
            }
            return {
                success: true,
                matchedCount: result.matchedCount,
                modifiedCount: result.modifiedCount,
            };
        }
        catch (error) {
            console.error('Error in endExercises:', error);
            throw error;
        }
    }
    async findExerciseById(id) {
        try {
            const exercise = await this.exercisesRepository.findBy({
                where: {
                    _id: new mongodb_1.ObjectId(id)
                }
            });
            return exercise;
        }
        catch (error) {
            throw error;
        }
    }
    async createExercises(data) {
        try {
            const createdExercises = await Promise.all(data.map(async (item) => await this.createExercise(item)));
            const exerciseIds = createdExercises.map(ex => ex._id.toString());
            return exerciseIds;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ExercisesService = ExercisesService;
exports.ExercisesService = ExercisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('EXERCISES')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.MongoRepository !== "undefined" && typeorm_1.MongoRepository) === "function" ? _a : Object])
], ExercisesService);


/***/ }),

/***/ "./apps/workouts/src/exercises/provider/exercises.provides.ts":
/*!********************************************************************!*\
  !*** ./apps/workouts/src/exercises/provider/exercises.provides.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exercisesProviders = void 0;
const exercises_1 = __webpack_require__(/*! ../entity/exercises */ "./apps/workouts/src/exercises/entity/exercises.ts");
exports.exercisesProviders = [
    {
        provide: 'EXERCISES',
        useFactory: (dataSource) => dataSource.getRepository(exercises_1.Exercises),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/workouts/src/workouts.controller.ts":
/*!**************************************************!*\
  !*** ./apps/workouts/src/workouts.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkoutsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const workouts_service_1 = __webpack_require__(/*! ./workouts.service */ "./apps/workouts/src/workouts.service.ts");
let WorkoutsController = class WorkoutsController {
    workoutsService;
    constructor(workoutsService) {
        this.workoutsService = workoutsService;
    }
    getHello() {
        return this.workoutsService.getHello();
    }
};
exports.WorkoutsController = WorkoutsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], WorkoutsController.prototype, "getHello", null);
exports.WorkoutsController = WorkoutsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof workouts_service_1.WorkoutsService !== "undefined" && workouts_service_1.WorkoutsService) === "function" ? _a : Object])
], WorkoutsController);


/***/ }),

/***/ "./apps/workouts/src/workouts.module.ts":
/*!**********************************************!*\
  !*** ./apps/workouts/src/workouts.module.ts ***!
  \**********************************************/
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
const workouts_controller_1 = __webpack_require__(/*! ./workouts.controller */ "./apps/workouts/src/workouts.controller.ts");
const workouts_service_1 = __webpack_require__(/*! ./workouts.service */ "./apps/workouts/src/workouts.service.ts");
const exercises_module_1 = __webpack_require__(/*! ./exercises/exercises.module */ "./apps/workouts/src/exercises/exercises.module.ts");
const daily_workouts_module_1 = __webpack_require__(/*! ./daily-workouts/daily-workouts.module */ "./apps/workouts/src/daily-workouts/daily-workouts.module.ts");
let WorkoutsModule = class WorkoutsModule {
};
exports.WorkoutsModule = WorkoutsModule;
exports.WorkoutsModule = WorkoutsModule = __decorate([
    (0, common_1.Module)({
        imports: [exercises_module_1.ExercisesModule, daily_workouts_module_1.DailyWorkoutsModule],
        controllers: [workouts_controller_1.WorkoutsController],
        providers: [workouts_service_1.WorkoutsService],
    })
], WorkoutsModule);


/***/ }),

/***/ "./apps/workouts/src/workouts.service.ts":
/*!***********************************************!*\
  !*** ./apps/workouts/src/workouts.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkoutsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let WorkoutsService = class WorkoutsService {
    getHello() {
        return 'Hello World!';
    }
};
exports.WorkoutsService = WorkoutsService;
exports.WorkoutsService = WorkoutsService = __decorate([
    (0, common_1.Injectable)()
], WorkoutsService);


/***/ }),

/***/ "./libs/config/open-router.config.ts":
/*!*******************************************!*\
  !*** ./libs/config/open-router.config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('open-router', () => ({
    token: process.env.TOKEN
}));


/***/ }),

/***/ "./libs/contracts/users/get-user.dto.ts":
/*!**********************************************!*\
  !*** ./libs/contracts/users/get-user.dto.ts ***!
  \**********************************************/
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
exports.GetUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class GetUserDto {
    userId;
    name;
}
exports.GetUserDto = GetUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserDto.prototype, "name", void 0);


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

/***/ "./shared/lib/ai-router/ai-router.controller.ts":
/*!******************************************************!*\
  !*** ./shared/lib/ai-router/ai-router.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiRouterController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ai_router_service_1 = __webpack_require__(/*! ./ai-router.service */ "./shared/lib/ai-router/ai-router.service.ts");
let AiRouterController = class AiRouterController {
    aiRouterService;
    constructor(aiRouterService) {
        this.aiRouterService = aiRouterService;
    }
};
exports.AiRouterController = AiRouterController;
exports.AiRouterController = AiRouterController = __decorate([
    (0, common_1.Controller)('ai-router'),
    __metadata("design:paramtypes", [typeof (_a = typeof ai_router_service_1.AiRouterService !== "undefined" && ai_router_service_1.AiRouterService) === "function" ? _a : Object])
], AiRouterController);


/***/ }),

/***/ "./shared/lib/ai-router/ai-router.module.ts":
/*!**************************************************!*\
  !*** ./shared/lib/ai-router/ai-router.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiRouterModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ai_router_service_1 = __webpack_require__(/*! ./ai-router.service */ "./shared/lib/ai-router/ai-router.service.ts");
const ai_router_controller_1 = __webpack_require__(/*! ./ai-router.controller */ "./shared/lib/ai-router/ai-router.controller.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const open_router_config_1 = __webpack_require__(/*! @libs/config/open-router.config */ "./libs/config/open-router.config.ts");
let AiRouterModule = class AiRouterModule {
};
exports.AiRouterModule = AiRouterModule;
exports.AiRouterModule = AiRouterModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule,
            config_1.ConfigModule.forRoot({
                load: [open_router_config_1.default],
            }),
        ],
        controllers: [ai_router_controller_1.AiRouterController],
        providers: [
            ai_router_service_1.AiRouterService,
            {
                provide: 'CONFIGURATION(open-router)',
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('open-router'),
            },
        ],
        exports: [ai_router_service_1.AiRouterService]
    })
], AiRouterModule);


/***/ }),

/***/ "./shared/lib/ai-router/ai-router.service.ts":
/*!***************************************************!*\
  !*** ./shared/lib/ai-router/ai-router.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiRouterService = void 0;
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AiRouterService = class AiRouterService {
    httpService;
    configService;
    apiOpenRouterConfig;
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.apiOpenRouterConfig = this.configService.get('open-router');
    }
    async request(promt) {
        try {
            const res = await (0, rxjs_1.lastValueFrom)(this.httpService.post('http://localhost:11434/api/generate', {
                "model": "mistral",
                "prompt": `${promt}`,
                "stream": false
            }));
            const responseString = res.data.response;
            try {
                const res = JSON.parse(responseString);
                return res;
            }
            catch (e) {
                throw new e;
            }
        }
        catch (error) {
            throw error;
        }
    }
    async commentExercise(requirements, exercises) {
        try {
            const prompt = `
      Напиши короткий вдячний коментар для вправи "${exercises.name}", яку користувач виконав ${exercises.count} разів, з урахуванням фізичних вимог:

      ${requirements}

      Коментар має бути у формі подяки (наприклад: "Дякуємо за ваші старання!") і містити натяк, що на основі цих даних буде сформовано індивідуальну програму тренувань.

      Поверни лише об'єкт з полем comment:

      {
        "comment": "Коментар для користувача"
      }

      Не додавай жодних пояснень. Поверни лише JSON-об'єкт.
    `;
            const res = await this.request(prompt);
            return res;
        }
        catch (error) {
            return { comment: "" };
        }
    }
    async createFirstWorkoutsCheckingIndicators(requirements) {
        try {
            const promt = `
         Проведи оцінку фізичних показників користувача згідно з вимогами:
         
         ${requirements}
         
         Для кожної вправи запитай у користувача відповідне значення. Формат запитань:
         - "Скільки хвилин вам потрібно, щоб пробігти 3 км?"
         - "Скільки віджимань ви можете зробити?"
         - "Скільки хвилин ви можете тримати планку?"
         
         Поверни лише JSON-масив у форматі:
         
        [
  {
    "exercise": "Назва вправи",
    "name": "Назва вправи для користувача (наприклад, скільки віджимань зможете зробити?)",
    "count": "null",
    "description": "Опис: для чого, які м'язи задіяні і т.д."
  }
]
         
         Не додавай жодних пояснень. Поверни лише масив. Це буде використовуватись для створення персонального плану тренувань.
      `;
            const res = await this.request(promt);
            return res;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AiRouterService = AiRouterService;
exports.AiRouterService = AiRouterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AiRouterService);


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
/*!***********************************!*\
  !*** ./apps/workouts/src/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const workouts_module_1 = __webpack_require__(/*! ./workouts.module */ "./apps/workouts/src/workouts.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const filter_1 = __webpack_require__(/*! @app/filter */ "./libs/filter/src/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(workouts_module_1.WorkoutsModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'workouts_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    app.useGlobalFilters(new filter_1.RpcHttpExceptionFilter());
    await app.listen();
}
bootstrap();

})();

/******/ })()
;