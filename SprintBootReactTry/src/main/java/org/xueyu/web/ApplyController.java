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

import java.util.HashMap;
import java.util.Map;

import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



/**
 * @author Greg Turnquist
 */
// tag::code[]
@RestController
public class ApplyController {


	@RequestMapping(value = "/applyPerm", method = RequestMethod.POST)
	public Map<String,String> applyPerm(
			@RequestParam(value = "serviceName", required = true) String serviceName,
			@RequestParam(value = "groupId", required = false) String groupId,
			@RequestParam(value = "topic", required = false) String topic,
			@RequestParam(value = "clientType", required = true) String clientType,
			@RequestParam(value = "clusterType", required = true) String clusterType
			) {
		System.out.println("##serviceName:"+serviceName);
		Map<String,String> res = new HashMap<String,String>();
		//res.put("hi", "wrong");

		try {

			res.put("clientId", "aaa");
		
		} catch(Exception e) {
			e.printStackTrace();
		}
		return res;
	}

}
// end::code[]