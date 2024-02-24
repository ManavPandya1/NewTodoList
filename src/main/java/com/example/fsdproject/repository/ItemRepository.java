package com.example.fsdproject.repository;

import com.example.fsdproject.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// AuctionItemRepository.java
public interface ItemRepository extends JpaRepository<Item, Long> {


    List<Item> findAll();

    List<Item> findByUser_Id(Long userId);

}

