delete database if exists oc;
create database oc;
use oc;

create table Profile (
    user_id int AUTO_INCREMENT NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    username varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    primary key(user_id) 
);

create table Content (
    post_id int AUTO_INCREMENT NOT NULL ,
    user_id int UNIQUE NOT NULL,
    content varchar(255) NOT NULL,
    img_text varchar(500) NOT NULL,
    post_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    no_votes int NOT NULL,
    time_of_del TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    no_reports int NOT NULL,
    primary key(post_id),
    foreign key(user_id) references Profile(user_id)
);

-- Table for user profiles
