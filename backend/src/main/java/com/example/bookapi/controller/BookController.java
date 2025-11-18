package com.example.bookapi.controller;

import com.example.bookapi.model.Book;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/books")
@CrossOrigin("*")
public class BookController {

    private List<Book> books = new ArrayList<>();
    private AtomicLong idGen = new AtomicLong(1);

    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable long id) {
        return books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    @GetMapping("/search")
    public List<Book> search(@RequestParam String title) {
        String key = title.toLowerCase();
        List<Book> result = new ArrayList<>();
        for (Book b : books) {
            if (b.getTitle().toLowerCase().contains(key)) {
                result.add(b);
            }
        }
        return result;
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        book.setId(idGen.getAndIncrement());
        books.add(book);
        return book;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        books.removeIf(b -> b.getId() == id);
    }
}
