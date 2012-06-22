
var gradebook = {
	"name": "For Tansy Rothwell",
	"students": [
	    {
	        "lastName": "Camp",
	        "firstName": "Tony",
	        "user": "tony_instructor2",
	        "classGrade": "B",
	        "grades": [
				{
	            	"7031": {
	                	"submitted": "yesterday",
	               		"grade": "7031 T-Grade"
	            	}
	            },
	            {
	            	"7032": {
	                	"submitted": "yesterday",
	                	"grade": "7032 T-Grade"
	            	}
	            },
	            {
	            	"7035": {
	                	"submitted": "yesterday",
	                	"grade": "7035 T-Grade"
	            	}
	            },
	            {
	            	"7033": {
	                	"submitted": "yesterday",
	                	"grade": "7033 T-Grade"
	            	}
	            },
	            {
	            	"7034": {
	                	"submitted": "yesterday",
	                	"grade": "7034 T-Grade"
	            	}
	            },
	            {
	            	"7036": {
	                	"submitted": "yesterday",
	                	"grade": "7036 T-Grade"
	            	}
	            }
	        ],
	        "categoryGrades": {
	            "8003": 80,
	            "8004": 90,
	            "8006": 55
	        }
	    },
	    {
	        "lastName": "Holdorpf",
	        "firstName": "Cris",
	        "user": "cris_instructor",
	        "classGrade": "A+",
	        "grades":[
	        	{
					"7031": {
						"submitted": "yesterday",
						"grade": "7031 C-Grade"
					}
				},
				{
	            	"7032": {
	                	"submitted": "yesterday",
	                	"grade": "7032  C-Grade"
	            	}
	            },
	            {
	            	"7035": {
	                	"submitted": "yesterday",
	                	"grade": "7035 C-Grade"
	            	}
	            },
	            {
	            	"7033": {
	                	"submitted": "yesterday",
	                	"grade": "7033  C-Grade"
	            	}
	            },
	            {
	            	"7034": {
	                	"submitted": "yesterday",
	                	"grade": "7034  C-Grade"
	            	}
	            },
	            {
	            	"7036": {
	                	"submitted": "yesterday",
	                	"grade": "7036  C-Grade"
	            	}
	            }
	        ],
	        "categoryGrades": {
	            "8003": 100,
	            "8004": 70,
	            "8006": 10
	        }
	    },
	    {
	        "lastName": "Dubose",
	        "firstName": "Ali",
	        "user": "ali-stu",
	        "classGrade": "A",
	        "grades":[
	        	{
					"7031": {
						"submitted": "yesterday",
						"grade": "7031 A-Grade"
					}
				},
				{
	            	"7032": {
	                	"submitted": "yesterday",
	                	"grade": "7032  A-Grade"
	            	}
	            },
	            {
	            	"7035": {
	                	"submitted": "yesterday",
	                	"grade": "7035 A-Grade"
	            	}
	            },
	            {
	            	"7033": {
	                	"submitted": "yesterday",
	                	"grade": "7033  A-Grade"
	            	}
	            },
	            {
	            	"7034": {
	                	"submitted": "yesterday",
	                	"grade": "7034  A-Grade"
	            	}
	            },
	            {
	            	"7036": {
	                	"submitted": "yesterday",
	                	"grade": "7036  A-Grade"
	            	}
	            }
	        ],
	        "categoryGrades": {
	            "8003": 5,
	            "8004": 10,
	            "8006": 11
	        }
	    }
	],
	"gradebookItems" : [
		{
			"7031" : {
				"id": "7031",
				"name": "Chapter 1",
				"itemType": "assignment",
				"category": "8003",
				"hideInAllGrades": false,
				"due": "yesterday"
			}
		},
		{
			"7032": {
				"id": "7032",
				"name": "Chapter 2",
				"category": "8003",
				"hideInAllGrades": false,
				"itemType": "assignment",
				"due": "today"
			}
		},
		{
			"7033": {
				"id": "7033",
				"name": "Chapter 3",
				"category": "8004",
				"hideInAllGrades": false,
				"itemType": "assignment",
				"due": "today"
			}
		},
		{
			"7034": {
				"id": "7034",
				"name": "Chapter 4",
				"category": "8004",
				"hideInAllGrades": false,
				"itemType": "assignment",
				"due": "today"
			}
		},
		{
			"7035": {
				"id": "7035",
				"name": "Chapter 5",
				"category": "8004",
				"hideInAllGrades": false,
				"itemType": "assignment",
				"due": "today"
			}
		},
		{
			"7036": {
				"id": "7036",
				"name": "Chapter 6",
				"category": "8005",
				"hideInAllGrades": false,
				"itemType": "assignment",
				"due": "today"
			}
		}
	],
	"categories": [
		{
			"Category1": {
				"id": 8003,
				"name": "Category for all sets that contain themselves",
				"grades": [ "7031", "7032" ]
			}
		},
		{
			"Unassigned": {
				"id": 8004,
				"name": "Unassigned",
				"grades": [ "7033", "7034", "7035" ]
			}
		},
		{
			"Test": {
				"id": 8005,
				"name": "Test",
				"grades": [ "7036" ]
			}
		}
	]
};