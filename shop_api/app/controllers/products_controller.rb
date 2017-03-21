class ProductsController < ApplicationController
  def index()
    @products = Product.all()
    render json: @products
  end

  def show()
    product = Product.find(params[:id])
    render json: product
  end

  def update()
    @products = Product.all()
    product = Product.find(params[:id])
    product.update_attributes(product_params)
    render json: product
  end

  def create()
    @products = Product.all()
    product = Product.create(product_params)
    render json: @products
  end

  def destroy()
    @products = Product.all()
    product = Product.find(params[:id])
    product.delete
    render json: @products
  end

  private
    def product_params
      params.require(:product).permit([:item_id, :price, :url, :stock, :clothing])
    end

end