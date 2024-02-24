package com.example.fsdproject.service;

import com.example.fsdproject.entity.Item;
import com.example.fsdproject.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemService {

    @Autowired
    private ItemRepository auctionItemRepository;

    public List<Item> findAllItems()
    {
        return auctionItemRepository.findAll();
    }

    public Item saveAuctionItem(Item auctionItem) {
        return auctionItemRepository.save(auctionItem);
    }

    public List<Item> findByUserId(Long userId) {
        return auctionItemRepository.findByUser_Id(userId);
    }
}


