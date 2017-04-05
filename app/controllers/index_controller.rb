class IndexController < ApplicationController
    
    def index

    end

    def blogtitles
         Article.ajaxCall() 
    end
    
    
end
