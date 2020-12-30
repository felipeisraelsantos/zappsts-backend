-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zappts-desafio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zappts-desafio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zappts-desafio` DEFAULT CHARACTER SET utf8mb4 ;
USE `zappts-desafio` ;

-- -----------------------------------------------------
-- Table `zappts-desafio`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zappts-desafio`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `age` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zappts-desafio`.`letters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zappts-desafio`.`letters` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  `sender` VARCHAR(255) NOT NULL,
  `receiver` VARCHAR(255) NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_letters_users_idx` (`users_id` ASC),
  CONSTRAINT `fk_letters_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `zappts-desafio`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
