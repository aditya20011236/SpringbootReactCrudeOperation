package com.mydata.service;

import java.util.List;

import com.mydata.model.User;

public interface UserService {
	
	User saveuser(User user);
	
	List<User>getalluser();
	
	User getuserbyid(int id);
	
	User updateuser(User user,int id);
	
    void deleteuserbyid(int id);

}
