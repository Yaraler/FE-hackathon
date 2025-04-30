import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiRouterService } from './ai-router.service';

@Controller('ai-router')
export class AiRouterController {
  constructor(private readonly aiRouterService: AiRouterService) { }


}
