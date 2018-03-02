# Discovery Notes

## Feature module?
Seems like there is enough functionality for everything related to an individual product that it could be it's own feature module. Unless we are okay with multiple smart components in each feature module.

I don't think the product module will need it's own routing file, since it will often be included in the routing modules of _other_ features, like `shop` or `search`.

## Potential Product Module breakdown
- `/product`
  - `/container`
    - `product.component.ts`
      Conditionally retrieves a list of specs for the product when `product.SpecCount > 0` to pass into **ProductFormComponent** or individual **ProductSpecComponent**s. lineTotal uses the **LineTotalPipe** to return the current estimated `lineTotal`. I know this is possible, but not sure how it works, but it would be nice to be able to pass in a template #ref so people can override the entire product component template; base it on `product.xp`, route params, or current category depending on the context/client.
      ```typescript
      @Input() product: BuyerProduct;
      form: FormGroup;
      showForm: boolean;
      markup: number;
      productSpecs?: BuyerSpec[] = [];
      addToCartSuccess(lineItem) => swal.show({html, ...defaults});
      addToCartError(error) => swal.show({html, ...defaults});
      get lineTotal() => number;
      ```
    - `product-group.service.ts`
    A service for maintaining / retrieving **ProductGroup** information. Could be useful for createing things like Featured Products, Best Sellers, Upsell, Cross-sell and so on. Max # of products will be 100 to keep list/get API calls efficient. These categories will created in a separate catalog that assigned at a buyer level w/ `ViewAllCategories:true`.
    The **ProductGroupAssignment** requires either a `ProductID` or `CategoryID` and will add/remove the **ProductGroup** category ID to the `category|product.xp.ProductGroups[group.Type]` array.
      ```typescript
      interface ProductGroup extends Category {
        Type: string<'Best' | 'Featured' | 'Upsell' | 'Xsell'>;
        Products: ListProduct;
      }

      interface ProductGroupAssignment {
        ProductID?: string,
        CategoryID?: string,
        GroupID: string,
      }
      List() => Observable<ProductGroup[]>;
      Get(groupID:string|string[]) => Observable<ProductGroup>;
      Create(group:ProductGroup ) => Observable<ProductGroup>;
      Update(groupID:string, group:ProductGroup) => Observable<ProductGroup>;
      Delete(groupID:string): Observable<void>;
      AddProduct(groupID: string, productID: string): Observable<void>;
      RemoveProduct(groupID: string, productID: string): Observable<void>;
      SaveAssignment(ProductGroupAssignment): Observable<void>;
      DeleteAsssignment(ProductGroupAssignment) Observable<void>;
      ```
  - `/components`
    - `/product-view`
      - Wrapper component for routing to a product, utilizes the product.resolve.ts to pass the product into the ProductComponent
    - `/product-form`
      Wrapper for simplifying generating an add to cart form, utilizes ProductSpecComponent and ProductQuantityComponent
      ```typescript
      @Input() product: BuyerProduct;
      @Output() added: EventEmitter;
      ```
    - `/product-spec` _or `product-input / product-specs`_
      Adds an individual spec's **FormControl** (input|select) to the form passed through the parent input. If the spec only has a default value (no options or open text allowed) it will be readonly. It may make sense to only pass in _input_ specs here and have another **ProductComponent** property for _static_ specs to be displayed elsewhere.
      ```typescript
      @Input('parent') form: FormGroup;
      @Input() displayType: <'auto' | 'color' | 'date' | 'email'...>;
      @Input() spec: BuyerSpec;
      ```
    - `/product-quantity`
      Adds a quantity **FormControl** (input|select) to the parent form that adheres to the price schedule of the product passed in.
      ```typescript
      @Input('parent') form: FormGroup;
      @Input() product: BuyerProduct;
      ```
    `-/product-savings`
    Something to show a product's original price break and how much you save based on the applied markdown.
    `-/product-images`
    Something that displays multiple product images in a variety of ways.
    `-/product-dropdown`
    Something that displays a list of products in a dropdown that outputs the selected product for upsell functionality
    `-/product-list`
    Something that displays a list of products as a grid, list, carousel or whatever else we can think of
  - `/pipes`
    - `line-total.pipe.ts`
      ```typescript
      (priceSchedule:PriceSchedule, Quantity:number = 1) => number
      ```
  - `/resolves`
    - `products.resolve.ts`
    Retrieve a list of products based on route params
    - `product.resolve.ts`
    Retrieve an individual product based on route params
  - `product.module.ts`
