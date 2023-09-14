/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hotel;

import hotel.Room;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author tahsi
 */
public class reservation extends javax.swing.JFrame {

    /**
     * Creates new form reservation
     */
    public reservation() {
        initComponents();
        Connect();
        autoID();
        //rtype();
        rno();
       // btype();
        data();
        display();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    
    
    Connection con;
    PreparedStatement pst;
    DefaultTableModel d;
    
    public void Connect(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            
            con = DriverManager.getConnection("jdbc:mysql://localhost/hotel", "root","");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Room.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(Room.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    public void autoID()
    
    {
        try {
            Statement s =con.createStatement();
            ResultSet rs = s.executeQuery("select MAX(reid)from reservation ");
            rs.next();
            rs.getString("MAX(reid)");
            if(rs.getString("MAX(reid)")==null)
            {
                jLabel11.setText("R0001");
            }
            else{
                long id = Long.parseLong(rs.getNString("MAX(reid)").substring(2,rs.getString("MAX(reid)").length()));
                 id++;
                jLabel11.setText("R"+ String.format("%03d",id));
            }
            
             
            
                    } catch (SQLException ex) {
            Logger.getLogger(Room.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
 /* public void rtype()
    {
        try {
            pst = con.prepareStatement("select Distinct rtype from room");
             ResultSet rs = pst.executeQuery();
             jComboBox1.removeAllItems();
             
             while(rs.next())
             {
                 jComboBox1.addItem(rs.getString("rtype"));
             }
             
             
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        } 
    }*/
  
  
    public void rno()
    {
        try {
            pst = con.prepareStatement("select Distinct rid from room ");
             ResultSet rs = pst.executeQuery();
             jComboBox2.removeAllItems();
             
             while(rs.next())
             {
                 jComboBox2.addItem(rs.getString("rid"));
                
             }
             
             
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        } 
    }
    
    
  /*  public void btype()
    {
        try {
            pst = con.prepareStatement("select Distinct rbed from room");
             ResultSet rs = pst.executeQuery();
             jComboBox3.removeAllItems();
             
             while(rs.next())
             {
                
                 jComboBox3.addItem(rs.getString("rbed"));
             }
             
             
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        } 
    }*/public void display(){
    int e;
        try {
            pst = con.prepareStatement("select * from room");
            ResultSet rs=pst.executeQuery();
            ResultSetMetaData rsd = rs.getMetaData();
            e = rsd.getColumnCount();
            d =(DefaultTableModel)jTable2.getModel();
            d.setRowCount(0);
            while(rs.next()){
                Vector v = new Vector();
                
                for(int i=1;i<=e;i++){
                    v.add(rs.getString("rid"));
                    v.add(rs.getString("rtype"));
                    v.add(rs.getString("rbed"));
                    v.add(rs.getString("amount"));
                }
                
                d.addRow(v);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(Room.class.getName()).log(Level.SEVERE, null, ex);
        }
}
      public void data()
    {
        
        int e;
        
        try {
            pst = con.prepareStatement("select * from  reservation");
           
            ResultSet rs = pst.executeQuery();
            ResultSetMetaData rsd = rs.getMetaData();
            e = rsd.getColumnCount();
            d = (DefaultTableModel)jTable1.getModel();
            d.setRowCount(0);
            while(rs.next())
            {
                Vector v2 = new Vector();
      
                
                
                
                for(int i =1; i<=e; i++)
                {
                    v2.add(rs.getString("reid"));
                    v2.add(rs.getString("name")); 
                    v2.add(rs.getString("address")); 
                    v2.add(rs.getString("number"));
                    v2.add(rs.getString("checkin"));
                    v2.add(rs.getString("checkout"));
                    //v2.add(rs.getString("rtype"));
                    v2.add(rs.getString("rno"));
                    //v2.add(rs.getString("btype"));
                    //v2.add(rs.getString("amount"));
                    
                }
                
                d.addRow(v2);
                
                
                
            }
            
            
            
            
            
            
            
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jTextField1 = new javax.swing.JTextField();
        jTextField2 = new javax.swing.JTextField();
        jTextField3 = new javax.swing.JTextField();
        jTextField5 = new javax.swing.JTextField();
        jComboBox2 = new javax.swing.JComboBox<>();
        jDateChooser1 = new com.toedter.calendar.JDateChooser();
        jDateChooser2 = new com.toedter.calendar.JDateChooser();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();
        jScrollPane2 = new javax.swing.JScrollPane();
        jTable2 = new javax.swing.JTable();
        jLabel7 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(0, 0, 0));
        setForeground(new java.awt.Color(204, 0, 51));
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setText("Reservation No");
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, 160, -1, -1));

        jLabel2.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setText("Name");
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 200, 86, -1));

        jLabel3.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(255, 255, 255));
        jLabel3.setText("Address");
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 240, 86, -1));

        jLabel4.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(255, 255, 255));
        jLabel4.setText("Mobile");
        getContentPane().add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(160, 280, 86, -1));

        jLabel5.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(255, 255, 255));
        jLabel5.setText("Check in");
        getContentPane().add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 320, 86, -1));

        jLabel6.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(255, 255, 255));
        jLabel6.setText("Check out");
        getContentPane().add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 360, 86, -1));

        jLabel8.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel8.setForeground(new java.awt.Color(255, 255, 255));
        jLabel8.setText("Room no");
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 410, 86, -1));

        jLabel10.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel10.setForeground(new java.awt.Color(255, 255, 255));
        jLabel10.setText("Amount");
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 430, 86, 30));

        jLabel11.setFont(new java.awt.Font("Tahoma", 1, 18)); // NOI18N
        jLabel11.setForeground(new java.awt.Color(255, 255, 255));
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 160, 110, 30));

        jTextField1.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        getContentPane().add(jTextField1, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 200, 287, -1));

        jTextField2.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        getContentPane().add(jTextField2, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 240, 287, -1));

        jTextField3.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        getContentPane().add(jTextField3, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 280, 287, -1));

        jTextField5.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        getContentPane().add(jTextField5, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 440, 287, -1));

        jComboBox2.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        getContentPane().add(jComboBox2, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 400, 287, -1));
        getContentPane().add(jDateChooser1, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 320, 287, -1));
        getContentPane().add(jDateChooser2, new org.netbeans.lib.awtextra.AbsoluteConstraints(220, 360, 287, -1));

        jTable1.setBackground(new java.awt.Color(153, 153, 255));
        jTable1.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "name", "mobile", "address", "mobile", "check in", "check out", "room no", "amount"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.String.class, java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.Integer.class
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }
        });
        jTable1.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jTable1MouseClicked(evt);
            }
        });
        jTable1.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyPressed(java.awt.event.KeyEvent evt) {
                jTable1KeyPressed(evt);
            }
        });
        jScrollPane1.setViewportView(jTable1);
        if (jTable1.getColumnModel().getColumnCount() > 0) {
            jTable1.getColumnModel().getColumn(6).setResizable(false);
            jTable1.getColumnModel().getColumn(7).setHeaderValue("amount");
        }

        getContentPane().add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(540, 81, 829, 370));

        jButton1.setBackground(new java.awt.Color(204, 204, 255));
        jButton1.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\Save-as-icon.png")); // NOI18N
        jButton1.setText("add");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 510, -1, -1));

        jButton2.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\Reset-icon.png")); // NOI18N
        jButton2.setText("Update");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 510, -1, -1));

        jButton3.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\Clear-icon.png")); // NOI18N
        jButton3.setText("clear");
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton3, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 510, -1, -1));

        jButton4.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\Close-2-icon.png")); // NOI18N
        jButton4.setText("delete");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton4, new org.netbeans.lib.awtextra.AbsoluteConstraints(340, 510, -1, -1));

        jButton5.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\rong.png")); // NOI18N
        jButton5.setText("Exit");
        jButton5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton5ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton5, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 510, -1, -1));

        jTable2.setBackground(new java.awt.Color(153, 153, 255));
        jTable2.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jTable2.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "Room no", "Room type", "Bed type", "Amount"
            }
        ));
        jScrollPane2.setViewportView(jTable2);

        getContentPane().add(jScrollPane2, new org.netbeans.lib.awtextra.AbsoluteConstraints(544, 462, 829, 326));

        jLabel7.setIcon(new javax.swing.ImageIcon("C:\\Users\\tahsi\\Documents\\NetBeansProjects\\IMG_0728.png")); // NOI18N
        jLabel7.setText("jLabel7");
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(-770, -120, 2160, 1000));

        jLabel9.setText("jLabel9");
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(310, 100, -1, -1));

        jLabel12.setText("jLabel12");
        getContentPane().add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 130, -1, -1));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TOD
            // TODO add your handling code here:
             String reid = jLabel11.getText();
        String name = jTextField1.getText();
        String address = jTextField2.getText();
        String number = jTextField3.getText();
        SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd");
        String sdate = df1.format(jDateChooser1.getDate());
        SimpleDateFormat df2 = new SimpleDateFormat("yyyy-MM-dd");
        String s2date = df1.format(jDateChooser2.getDate());
        
        

        
      //  String rtype = jComboBox1.getSelectedItem().toString();
        String rno = jComboBox2.getSelectedItem().toString();
       // String btype = jComboBox3.getSelectedItem().toString();
      //  String amount = jTextField5.getText();

        try {
 pst = con.prepareStatement("insert into reservation(reid,name,address,number,checkin,checkout,rno) values(?,?,?,?,?,?,?)");
            pst.setString(1, reid);
            pst.setString(2, name);
            pst.setString(3, address);
            pst.setString(4, number);
            pst.setString(5, sdate);
             pst.setString(6, s2date);
            //pst.setString(7, rtype);
            pst.setString(7, rno);
           // pst.setString(9, btype);
            // pst.setString(8, amount);
            
            pst.executeUpdate();
            JOptionPane.showMessageDialog(this, "Reservation Succesfull");
            
           
            jTextField1.setText("");
            jTextField2.setText("");
            jTextField3.setText("");
            // jDateChooser1.setText("");
           //jDateChooser2.setText("");
            //jComboBox1.setSelectedIndex(-1);
            jComboBox2.setSelectedIndex(-1);
          //  jComboBox3.setSelectedIndex(-1);
          //  jTextField5.setText("");
            
            
            
            
            
    
            autoID();
            data();
         //   Load_room();
            
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        }
        
            
        
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        // TODO add your handling code here:
        
        
        
        
        
        
       
            jTextField1.setText("");
            jTextField2.setText("");
            jTextField3.setText("");
           jDateChooser1.setDate(null);
           
           jDateChooser2.setDate(null);
           // jComboBox1.setSelectedIndex(-1);
            jComboBox2.setSelectedIndex(-1);
           // jComboBox3.setSelectedIndex(-1);
            //jTextField5.setText("");
            
            autoID();
            data();
       
        
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
           String reid = jLabel11.getText();
        String name = jTextField1.getText();
        String address = jTextField2.getText();
        String number = jTextField3.getText();
        SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd");
        String sdate = df1.format(jDateChooser1.getDate());
        SimpleDateFormat df2 = new SimpleDateFormat("yyyy-MM-dd");
        String s2date = df1.format(jDateChooser2.getDate());
        
        

        
      //  String rtype = jComboBox1.getSelectedItem().toString();
        String rno = jComboBox2.getSelectedItem().toString();
       // String btype = jComboBox3.getSelectedItem().toString();
       // String amount = jTextField5.getText();

        try {
 pst = con.prepareStatement("update reservation set name = ?, address = ?, number = ?, checkin = ?, checkout = ?, rno = ? where reid =?");
            
            pst.setString(1, name);
            pst.setString(2, address);
            pst.setString(3, number);
            pst.setString(4, sdate);
             pst.setString(5, s2date);
            //pst.setString(7, rtype);
            pst.setString(6, rno);
           // pst.setString(9, btype);
            // pst.setString(7, amount);
              pst.setString(7, reid);
             
            
            pst.executeUpdate();
            JOptionPane.showMessageDialog(this, "Reservation Succesfull");
            
          
            jTextField1.setText("");
            jTextField2.setText("");
            jTextField3.setText("");
             jDateChooser1.setDate(null);
           jDateChooser2.setDate(null);
            //jComboBox1.setSelectedIndex(-1);
            jComboBox2.setSelectedIndex(-1);
          //  jComboBox3.setSelectedIndex(-1);
            //jTextField5.setText("");
            
            
            
            
            
    
            autoID();
            data();
         //   Load_room();
            
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        
        
        
        
        
        
        
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        // TODO add your handling code here:
         String reid = jLabel11.getText();
//        String name = jTextField1.getText();
//        String address = jTextField2.getText();
//        String number = jTextField3.getText();
//        SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd");
//        String sdate = df1.format(jDateChooser1.getDate());
//        SimpleDateFormat df2 = new SimpleDateFormat("yyyy-MM-dd");
//        String s2date = df1.format(jDateChooser2.getDate());
//        
//        
//
//        
//        String rtype = jComboBox1.getSelectedItem().toString();
//        String rno = jComboBox2.getSelectedItem().toString();
//        String btype = jComboBox3.getSelectedItem().toString();
//        String amount = jTextField5.getText();

        try {
 pst = con.prepareStatement("delete from reservation where reid = ?");
            pst.setString(1, reid);
//            pst.setString(2, name);
//            pst.setString(3, address);
//            pst.setString(4, number);
//            pst.setString(5, sdate);
//             pst.setString(6, s2date);
//            pst.setString(7, rtype);
//            pst.setString(8, rno);
//            pst.setString(9, btype);
//             pst.setString(10, amount);
//            
            pst.executeUpdate();
            JOptionPane.showMessageDialog(this, "Delete Succesfully");
            
           
            jTextField1.setText("");
            jTextField2.setText("");
            jTextField3.setText("");
            // jDateChooser1.setText("");
           //jDateChooser2.setText("");
           // jComboBox1.setSelectedIndex(-1);
            jComboBox2.setSelectedIndex(-1);
           // jComboBox3.setSelectedIndex(-1);
            //jTextField5.setText("");
            
            
            
            
            
    
            autoID();
            data();
         //   Load_room();
            
        } catch (SQLException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        }
        
            
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jTable1KeyPressed(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_jTable1KeyPressed
        // TODO add your handling code here:
        
        char c= evt.getKeyChar();
        if(Character.isLetter(c)){
            jTextField3.setEditable(false);
            //jLabel7.setText("Please only enter number");
        }else{
             jTextField3.setEditable(true);
             
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }//GEN-LAST:event_jTable1KeyPressed

    private void jTable1MouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jTable1MouseClicked
        try {
            // TODO add your handling code here:
            
            
            
            d =(DefaultTableModel)jTable1.getModel();
            int Index = jTable1.getSelectedRow();
            jLabel11.setText(d.getValueAt(Index,0).toString());
            jTextField1.setText(d.getValueAt(Index,1).toString());
            jTextField2.setText(d.getValueAt(Index,2).toString());
            jTextField3.setText(d.getValueAt(Index,3).toString());
            Date date = new SimpleDateFormat("yyyy-MM-dd").parse((String)d.getValueAt(Index,4));
                  jDateChooser1.setDate(date);
                   Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse((String)d.getValueAt(Index,5));
                  jDateChooser2.setDate(date2);
                    //jDateChooser1.setDate(jDateChooser1.getDateEditor().getDate(),4);
                    //jDateChooser1.setDateFormatString((String) jTable1.getValueAt(jTable1.getSelectedRow(),4));
                    //jDateChooser2.setDateFormatString((String) jTable1.getValueAt(jTable1.getSelectedRow(),4));
                    //jDateChooser2.setDateFormatString(d.getValueAt(Index,5).toString());
                   // jComboBox1.setSelectedItem(d.getValueAt(Index,6).toString());
                    jComboBox2.setSelectedItem(d.getValueAt(Index,6).toString());
                    //jComboBox3.setSelectedItem(d.getValueAt(Index,8).toString());
                    //jTextField5.setText(d.getValueAt(Index,7).toString());
                    
                    jButton1.setEnabled(false);
        } catch (ParseException ex) {
            Logger.getLogger(reservation.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        
        
        
        
        
        
        
        
    }//GEN-LAST:event_jTable1MouseClicked

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
        // TODO add your handling code here:
         this.setVisible(false);
        
    }//GEN-LAST:event_jButton5ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(reservation.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(reservation.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(reservation.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(reservation.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new reservation().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JComboBox<String> jComboBox2;
    private com.toedter.calendar.JDateChooser jDateChooser1;
    private com.toedter.calendar.JDateChooser jDateChooser2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JTable jTable1;
    private javax.swing.JTable jTable2;
    private javax.swing.JTextField jTextField1;
    private javax.swing.JTextField jTextField2;
    private javax.swing.JTextField jTextField3;
    private javax.swing.JTextField jTextField5;
    // End of variables declaration//GEN-END:variables
}
