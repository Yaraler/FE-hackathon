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

/***/ "./apps/users/src/auth/auth.controller.ts":
/*!************************************************!*\
  !*** ./apps/users/src/auth/auth.controller.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/users/src/auth/auth.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const validate_user_dto_1 = __webpack_require__(/*! @libs/contracts/users/validate-user.dto */ "./libs/contracts/users/validate-user.dto.ts");
const registration_dto_1 = __webpack_require__(/*! @libs/contracts/users/registration.dto */ "./libs/contracts/users/registration.dto.ts");
const user_entity_1 = __webpack_require__(/*! ../user/entity/user.entity */ "./apps/users/src/user/entity/user.entity.ts");
const refresh_access_token_dto_1 = __webpack_require__(/*! @libs/contracts/users/refresh-access-token.dto */ "./libs/contracts/users/refresh-access-token.dto.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async validateUser(data) {
        return this.authService.validateUser(data);
    }
    async registration(data) {
        return await this.authService.registration(data);
    }
    async login(data) {
        return await this.authService.login(data);
    }
    async refresh(data) {
        return await this.authService.refresh(data);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, microservices_1.MessagePattern)("auth.validateUser"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof validate_user_dto_1.ValidateUserDto !== "undefined" && validate_user_dto_1.ValidateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateUser", null);
__decorate([
    (0, microservices_1.MessagePattern)("auth.registration"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof registration_dto_1.RegistrationDto !== "undefined" && registration_dto_1.RegistrationDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, microservices_1.MessagePattern)("auth.login"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, microservices_1.MessagePattern)("auth.refresh"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof refresh_access_token_dto_1.RefreshAccessTokenDto !== "undefined" && refresh_access_token_dto_1.RefreshAccessTokenDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/users/src/auth/auth.module.ts":
/*!********************************************!*\
  !*** ./apps/users/src/auth/auth.module.ts ***!
  \********************************************/
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
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/users/src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/users/src/auth/auth.controller.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const user_providers_1 = __webpack_require__(/*! ../user/user.providers */ "./apps/users/src/user/user.providers.ts");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./apps/users/src/user/user.module.ts");
const strategy_1 = __webpack_require__(/*! @app/strategy */ "./libs/strategy/src/index.ts");
const token_module_1 = __webpack_require__(/*! ../token/token.module */ "./apps/users/src/token/token.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            src_1.DatabaseModule,
            my_logger_1.MyLoggerModule,
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            passport_1.PassportModule.register({ session: false }),
            token_module_1.TokenModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, ...user_providers_1.userProviders, strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);


/***/ }),

/***/ "./apps/users/src/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/auth/auth.service.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./apps/users/src/user/user.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const my_logger_1 = __webpack_require__(/*! @app/my-logger */ "./libs/my-logger/src/index.ts");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const token_service_1 = __webpack_require__(/*! ../token/token.service */ "./apps/users/src/token/token.service.ts");
let AuthService = class AuthService {
    userRepository;
    userService;
    tokenService;
    logger;
    constructor(userRepository, userService, tokenService, logger) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.tokenService = tokenService;
        this.logger = logger;
    }
    async validateUser(data) {
        try {
            const user = await this.userService.findOne(data.email);
            if (!user)
                return null;
            const verifyPassword = await bcrypt.compare(data.password, user.password);
            if (!verifyPassword)
                return null;
            return user;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Validate user failed');
        }
    }
    async registration(data) {
        try {
            const { name, email, password, brigadId } = data;
            if (await this.userService.findOne(email)) {
                throw new common_1.BadRequestException('The email was already taken.');
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = this.userRepository.create({
                name: name,
                email: email,
                password: hashedPassword,
                brigadeId: new mongodb_1.ObjectId(brigadId),
                DailyWorkoutsIds: []
            });
            const user = await this.userRepository.save(newUser);
            return this.createToken(user);
        }
        catch (error) {
            this.logger.error(error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred');
        }
    }
    async login(data) {
        try {
            return await this.createToken(data);
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Login failed');
        }
    }
    async refresh(data) {
        try {
            const { refreshToken } = data;
            const payload = await this.tokenService.verifyRefreshToken(refreshToken);
            const user = await this.userService.findById(payload.id);
            if (!user)
                throw new common_1.BadRequestException('The user id dosent find.');
            const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);
            if (!isMatch)
                throw new common_1.UnauthorizedException('Invalid refresh token');
            const newAccessToken = await this.tokenService.createAccessToken(payload);
            return { accessToken: newAccessToken };
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async createToken(user) {
        try {
            const payload = { name: user.name, id: user._id.toString() };
            const accessToken = await this.tokenService.createAccessToken(payload);
            const refreshToken = await this.tokenService.createRefreshToken(payload);
            await this.saveRefreshToken(user._id.toString(), refreshToken);
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (err) {
            if (!(err instanceof common_1.HttpException)) {
                throw new common_1.InternalServerErrorException('Token create error');
            }
            throw err;
        }
    }
    async saveRefreshToken(userId, refreshToken) {
        const hashed = await bcrypt.hash(refreshToken, 10);
        await this.userRepository.update(userId, { refreshToken: hashed });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object, typeof (_c = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _c : Object, typeof (_d = typeof my_logger_1.MyLoggerService !== "undefined" && my_logger_1.MyLoggerService) === "function" ? _d : Object])
], AuthService);


/***/ }),

/***/ "./apps/users/src/token/token.module.ts":
/*!**********************************************!*\
  !*** ./apps/users/src/token/token.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const token_service_1 = __webpack_require__(/*! ./token.service */ "./apps/users/src/token/token.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule],
        providers: [token_service_1.TokenService],
        exports: [token_service_1.TokenService]
    })
], TokenModule);


/***/ }),

/***/ "./apps/users/src/token/token.service.ts":
/*!***********************************************!*\
  !*** ./apps/users/src/token/token.service.ts ***!
  \***********************************************/
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
exports.TokenService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let TokenService = class TokenService {
    jwtService;
    refreshSecret = constants_1.jwtConstants.refresh_secret;
    accessSecret = constants_1.jwtConstants.access_secret;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async verifyRefreshToken(token) {
        return await this.jwtVerify(token, this.accessSecret);
    }
    async verfiftyRefreshToken(token) {
        return await this.jwtVerify(token, this.refreshSecret);
    }
    async createRefreshToken(dataToken) {
        return await this.createToken(dataToken, "24d", this.refreshSecret);
    }
    async createAccessToken(dataToken) {
        return await this.createToken(dataToken, "24h", this.accessSecret);
    }
    async createToken(dataToken, time, secret) {
        const token = this.jwtService.sign(dataToken, { secret: secret, expiresIn: time });
        return token;
    }
    async jwtVerify(token, secret) {
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: secret
            });
            return payload;
        }
        catch (e) {
            throw new jwt_1.JsonWebTokenError('Invalid refresh token');
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], TokenService);


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

/***/ "./apps/users/src/users.module.ts":
/*!****************************************!*\
  !*** ./apps/users/src/users.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/users/src/user/user.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/users/src/auth/auth.module.ts");
const src_1 = __webpack_require__(/*! @libs/database/src */ "./libs/database/src/index.ts");
const token_module_1 = __webpack_require__(/*! ./token/token.module */ "./apps/users/src/token/token.module.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, src_1.DatabaseModule, auth_module_1.AuthModule, token_module_1.TokenModule],
        controllers: [],
        providers: [],
    })
], UsersModule);


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

/***/ "./libs/contracts/users/validate-user.dto.ts":
/*!***************************************************!*\
  !*** ./libs/contracts/users/validate-user.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ValidateUserDto {
    email;
    password;
}
exports.ValidateUserDto = ValidateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateUserDto.prototype, "password", void 0);


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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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
/*!********************************!*\
  !*** ./apps/users/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const users_module_1 = __webpack_require__(/*! ./users.module */ "./apps/users/src/users.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const filter_1 = __webpack_require__(/*! @app/filter */ "./libs/filter/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(users_module_1.UsersModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'user_queue',
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