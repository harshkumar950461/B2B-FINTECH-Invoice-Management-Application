package advSearch;


import java.io.IOException;
import java.util.ArrayList;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import crud.crud;
import com.google.gson.Gson;
import pojo.pojo;


@WebServlet("/advSearch")
public class advSearch extends HttpServlet {
  private static final long serialVersionUID = 1L;
       
   
    public advSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

  
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    crud fetchdata=new crud();
    
    String doc_id=request.getParameter("doc_id");
    String invoice_id =request.getParameter("invoice_id");
    String cust_number=request.getParameter("cust_number");
    String buisness_year=request.getParameter("buisness_year");
    System.out.println(doc_id);
    System.out.println(invoice_id);
    System.out.println(cust_number);
    System.out.println(buisness_year);
    ArrayList<pojo> data = fetchdata.advData(doc_id,invoice_id,cust_number,buisness_year);
    
        
      Gson gson = new Gson();
      String respData = gson.toJson(data);
      response.setHeader("Access-Control-Allow-Origin","*");
      response.getWriter().append(respData);
      
  }
  
  /**
   * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	  this.doGet(request, response);
  }

}