import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  content: string;
}

export class CreateArticleCommentDto {
  @ApiProperty()
  parentCommentId?: number;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  content: string;
}

export class ArticleQuery {
  page?: number;
}
