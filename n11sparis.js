$.getJSON("n11sparis.json", function (data) {
    let arr = data.order;
    let arr1 = ["price","productId",'productName','productSellerCode','quantity','shipmentCode','trackingNumber'];

    for(let i =0;i<arr.length;i++){
        let arr2 = [];
        arr2 =Object.values(arr[i].orderItemList.orderItem[0]);
        arr2.splice(0,4);
        arr2.splice(6,3);
        for(let k =0;k<arr1.length;k++){
            arr[i][arr1[k]] =arr2[k];
        }

    };



    obj= {
        key:'vl',
        bl:'fr',
    }



    console.log(arr)
    if(arr.length!=0){
        new Vue({
            el: '#example-table',
            data() {
                return {
                    dados: arr,
                    options: {
                        columns: [{
                            formatter:"rownum" ,
                            sorter:"number",
                            width:50,
                            headerTooltip:true,
                            title:"ID",
                            field:"row_id",
                          },

                        {
                          title:"Sipariş No",
                          field:"orderNumber" ,
                          sorter:"number",
                          headerTooltip:true,
                        },

                        {
                          title:"Sipariş Tarih",
                          field:"createDate",
                          sorter:"number",
                          headerTooltip:true,
                        },
                        {
                          title:"Ürün Adı",
                          field:"productName",
                          sorter: 'number',
                          headerTooltip:true,
                        },

                        {
                          title:"Ürün Satış Kodu",
                          field:"productSellerCode",
                          sorter: 'string',
                          tooltip:true,
                          headerTooltip:true,
                          headerFilter:"input",
                          headerFilterPlaceholder:"ara",
                        },

                        {
                          title:"Ürün Id",
                          field:"productId",
                          sorter:"string",
                          tooltip:true,
                          headerFilter:"input",
                          headerFilterPlaceholder:"ara",
                        },

                        {
                          title:"Fiyat",
                          field:"price",
                          sorter:"number",
                          width:75,
                          tooltip:true,
                        },

                        {
                          title:"Adet",
                          field:"quantity",
                          sorter: 'string',
                          width: 70,
                          tooltip:true,
                        },


                        {
                          title:"Toplam Fiyat" ,
                          field:"totalAmount",
                          sorter: 'string',
                          tooltip:true,

                        },
                        {
                            title:"Sipariş Durumu" ,
                            field:"status",
                            sorter: 'string',
                            width: 147,
                            headerTooltip:true

                          },
                          {
                            title:"Kargo Tarihi" ,
                            field:"shipmentCode",
                            sorter: 'string',
                            width: 210,
                            headerTooltip:true,
                            visible:true
                          },
                          {
                            title:"Takip No" ,
                            field:"trackingNumber",
                            sorter: 'string',
                            width: 210,
                            headerTooltip:true,
                            visible:true
                          },
                        //   {
                        //     title:"Kargo Firma" ,
                        //     field:"name",
                        //     sorter: 'string',
                        //     width: 210,
                        //     headerTooltip:true,
                        //     visible:true

                        //   },
                          {
                            title:"Kargoyu Göster" ,
                            field:"discount_value",
                            width: 210,
                            visible:true,
                            sorteble:false,
                            formatter:deleteIcon,

                          },
                      ],
                    }
                }
            }
          });
    }
});