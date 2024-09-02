

const commentsData=[
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[
            {
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },{
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    {
                        name:'Ravi' , 
                        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                        replies:[
                            
                
                        ]
                    },{
                        name:'Ravi' , 
                        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                        replies:[
                            
                
                        ]
                    },
        
                ]
            },{
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    {
                        name:'Ravi' , 
                        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                        replies:[
                            
                
                        ]
                    },{
                        name:'Ravi' , 
                        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                        replies:[
                            
                
                        ]
                    },
        
                ]
            },
        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[

        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[
            {
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },{
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },
        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[

        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[
            {
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },{
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },{
                name:'Ravi' , 
                text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
                replies:[
                    
        
                ]
            },
        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[

        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[

        ]
    },
    {
        name:'Ravi' , 
        text:'lorem ipsum lorem fwoek djpid pwofwp psmcs ksnsjve pjsv',
        replies:[

        ]
    },
]

const Comment=({data})=>{
    const{name , text , replies} = data;
    return(
        <div className="flex my-2 bg-gray-100 rounded-lg">
            <img
            className="w-12 h-12" alt="user-img" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"/>
            <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 ml-5 border border-l-black">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
}
const CommentsContainer=()=>{
    return(
        <div className="m-3 p-2  w-[900px]">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentList comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer;