package com.mydata.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mydata.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
