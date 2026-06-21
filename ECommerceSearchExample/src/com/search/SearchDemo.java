package com.search;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {

        for(Product product : products) {

            if(product.productId == targetId) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while(left <= right) {

            int mid = (left + right) / 2;

            if(products[mid].productId == targetId) {
                return products[mid];
            }

            if(products[mid].productId < targetId) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

            new Product(101,"Laptop","Electronics"),
            new Product(102,"Mobile","Electronics"),
            new Product(103,"Shoes","Fashion"),
            new Product(104,"Watch","Accessories"),
            new Product(105,"Headphones","Electronics")

        };

        System.out.println("Linear Search Result:");

        Product result1 = linearSearch(products,104);

        if(result1 != null) {
            result1.display();
        }
        else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("Binary Search Result:");

        Product result2 = binarySearch(products,104);

        if(result2 != null) {
            result2.display();
        }
        else {
            System.out.println("Product not found");
        }
    }
}