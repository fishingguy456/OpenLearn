/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package learningapp;

import java.io.File;
import java.util.ArrayList;

/**
 *
 * @author qukev
 */
public class Teacher {
    private String name;
    private int age;
    private ArrayList<String>skills;
    private ArrayList<String>degrees;
    private String email;
    private String password;
    private ArrayList<String>teaching;
    private ArrayList<File>resources;
    public Teacher(String newName, int newAge, ArrayList<String> newSkills, ArrayList<String> newDegrees, String newEmail, String newPassword){
        name = newName;
        age = newAge;
        skills = newSkills;
        degrees = newDegrees;
        email = newEmail;
        password = newPassword;
    }public Teacher(String newName, int newAge, ArrayList<String> newSkills, ArrayList<String> newDegrees, String newEmail, String newPassword, ArrayList<String>taught, ArrayList<File>res){
        //this method overloads the other one
        name = newName;
        age = newAge;
        skills = newSkills;
        degrees = newDegrees;
        email = newEmail;
        password = newPassword;
        teaching = taught;
        resources = res;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * @return the skills
     */
    public ArrayList<String> getSkills() {
        return skills;
    }

    /**
     * @param skills the skills to set
     */
    public void setSkills(ArrayList<String> skills) {
        this.skills = skills;
    }

    /**
     * @return the degrees
     */
    public ArrayList<String> getDegrees() {
        return degrees;
    }

    /**
     * @param degrees the degrees to set
     */
    public void setDegrees(ArrayList<String> degrees) {
        this.degrees = degrees;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the Teaching
     */
    public ArrayList<String> getTeaching() {
        return teaching;
    }

    /**
     * @param Teaching the Teaching to set
     */
    public void setTeaching(ArrayList<String> Teaching) {
        this.teaching = Teaching;
    }

    /**
     * @return the Resources
     */
    public ArrayList<File> getResources() {
        return resources;
    }

    /**
     * @param Resources the Resources to set
     */
    public void setResources(ArrayList<File> Resources) {
        this.resources = Resources;
    }
}
