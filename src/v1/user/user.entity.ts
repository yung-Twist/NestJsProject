import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment:'用户名',
    unique:true
  })
  username: string;

  @Column({
    length:32,
    comment:'密码' 
  })
  password: string;

  @Column(
        { 
          default: 1,
          comment:'状态 1:开启,2:关闭' 
        }
    )
  status: number;

  @CreateDateColumn(
    {
      type:'timestamp',
      comment:'创建时间'
    }
  )
  create_time: Date;

  @UpdateDateColumn(
    {
      type:'timestamp',
      comment:'更新时间'
    }
  )
  update_time: Date;
  
}
