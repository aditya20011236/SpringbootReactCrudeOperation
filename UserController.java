package com.mydata.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mydata.model.User;
import com.mydata.service.UserService;

@RestController
@CrossOrigin("http://localhost:3001")
public class UserController {
	@Autowired
	UserService userService;

	@PostMapping("/user")
	private User saveUser(@RequestBody User user) {
		return userService.saveuser(user);

	}

	@GetMapping("/users")
	public List<User> viewallUser() {
		return userService.getalluser();

	}

	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable int id, @RequestBody User user) {
		User existinguser = userService.getuserbyid(id);
		existinguser.setName(user.getName());
		existinguser.setUsername(user.getUsername());
		existinguser.setEmail(user.getEmail());
		return userService.saveuser(existinguser);

	}

	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteuserbyid(id);

	}

}
