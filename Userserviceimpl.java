package com.mydata.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mydata.Repository.UserRepository;
import com.mydata.model.User;

@Service
public class Userserviceimpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public User saveuser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getalluser() {
		return userRepository.findAll();
	}

	@Override
	public User getuserbyid(int id) {
		return userRepository.findById(id).get();
	}

	@Override
	public User updateuser(User user, int id) {
		return userRepository.save(user);
	}

	@Override
	public void deleteuserbyid(int id) {
		userRepository.deleteById(id);
		
	}

	

	



}
