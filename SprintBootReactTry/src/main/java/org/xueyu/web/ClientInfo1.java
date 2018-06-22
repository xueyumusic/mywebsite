/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.xueyu.web;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Data
@Entity
@Table(name = "clientinfo")
public class ClientInfo1 {

	//private @Id @GeneratedValue Long id;
//	private String firstName;
//	private String lastName;
//	private String description;

	//private ClientInfo() {}

//	public ClientInfo(String firstName, String lastName, String description) {
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.description = description;
//	}
	
	
	private @Id @GeneratedValue Long id;
	private String serviceName;
	private String groupId;
	private String topics;
	private String ctype;
	private String clusterType;
	private String salt;
	private String clientId;
	
	public ClientInfo1() {}
	
	public ClientInfo1(Long id,String serviceName, String groupId, String topics, String ctype, String clusterType, String salt, String clientId) {
		this.id = id;
		this.serviceName = serviceName;
		this.groupId = groupId;
		this.topics = topics;
		this.setCtype(ctype);
		this.clusterType = clusterType;
		this.salt = salt;
		this.clientId = clientId;
	}
	
	public ClientInfo1(String serviceName, String groupId, String topics, String ctype, String clusterType, String salt, String clientId) {
		this.serviceName = serviceName;
		this.groupId = groupId;
		this.topics = topics;
		this.setCtype(ctype);
		this.clusterType = clusterType;
		this.salt = salt;
		this.clientId = clientId;
	}
	
	
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public String getGroupId() {
		return groupId;
	}
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	public String getTopics() {
		return topics;
	}
	public void setTopics(String topics) {
		this.topics = topics;
	}
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	
	public String toString() {
		return "###clientinfo:"+serviceName+":"+topics+":"+salt+":"+clientId;
	}

	public String getCtype() {
		return ctype;
	}

	public void setCtype(String ctype) {
		this.ctype = ctype;
	}

	public String getClusterType() {
		return clusterType;
	}

	public void setClusterType(String cluserType) {
		this.clusterType = cluserType;
	}


}
// end::code[]