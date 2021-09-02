import jwt from "jsonwebtoken";


function getTokenPayload(token: string): string | jwt.JwtPayload | never {
    
    if (process.env.jwtSecret) {
        const decoded: string | jwt.JwtPayload =  jwt.verify( 
            token.replace("Bearer", '').trim(),
            process.env.jwtSecret); 
        console.log(decoded);
        return decoded  
    }
    throw new Error("Token not verified");
    
    
  
}

function getUserId(req?: any, authToken?: string) {
        
        if (req) {
            
            const authHeader = req.headers.authorization;
            if (authHeader) {
                let token: string = authHeader.replace("Bearer", '').trim();
            if (!token) {
                throw new Error('No token found');
            }
            
            const decoded: string | jwt.JwtPayload | undefined = getTokenPayload(authHeader);
            console.log("here");
            if (typeof decoded !== 'string' && typeof decoded !== "undefined") {
                const { userId } = decoded;
                return userId;
            }
            else {
                throw new Error("Incorrect Token");
            }
        
        }
    } else if (authToken) {
        const decoded: string | jwt.JwtPayload | undefined = getTokenPayload(authToken);
        
        if (typeof decoded !== 'string' && typeof decoded !== "undefined") {
            const { userId } = decoded;
            return userId;
        }
        else {
            throw new Error("Incorrect Token");
        }
    }

    throw new Error('Not authenticated');
}

export {
  getUserId
};