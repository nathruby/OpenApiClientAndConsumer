// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Tags
  } from "tsoa";

  @Route("tests")
  @Tags('Tests')
  export class TestsController extends Controller {

    constructor(){
        super();
    }

    @Get("{testId}")
    public async getTest(
      @Path() testId: number
    ): Promise<object> {
      return {"id": testId};
    }
}